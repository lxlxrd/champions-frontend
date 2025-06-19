import axios from "axios";
import { useAuthStore } from "@/stores/useAuthStore";

export function useAuth() {
  const authStore = useAuthStore();

  const setAuthHeader = () => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  const getCsrfCookie = async () => {
    await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
      withCredentials: true,
    });
  };

  const getXsrfToken = () => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("XSRF-TOKEN="));
    return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
  };

  const login = async (
    email: string,
    password: string,
    keepLoggedIn = false
  ) => {
    await getCsrfCookie();

    const xsrfToken = getXsrfToken();

    const { data } = await axios.post(
      "http://localhost:8000/login",
      { email, password, keepLoggedIn },
      {
        withCredentials: true,
        headers: {
          "X-XSRF-TOKEN": xsrfToken,
        },
      }
    );

    if (data.token) {
      localStorage.setItem("auth_token", data.token);
      localStorage.setItem("user_role", data.role);
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    }

    authStore.setUser(data.user);
    authStore.setRole(data.role);
    return data;
  };

  const fetchUser = async () => {
    setAuthHeader();

    const role = localStorage.getItem("user_role");
    if (!role) throw new Error("Missing role");

    const url =
      role === "admin"
        ? "http://localhost:8000/api/admin-user"
        : "http://localhost:8000/api/user";

    const { data } = await axios.get(url, {
      withCredentials: true,
    });

    authStore.setUser(data);
    authStore.setRole(role);
    return data;
  };

  const logout = async () => {
    setAuthHeader();

    await getCsrfCookie();
    const xsrfToken = getXsrfToken();

    try {
      await axios.post(
        "http://localhost:8000/logout",
        {},
        {
          withCredentials: true,
          headers: {
            "X-XSRF-TOKEN": xsrfToken,
          },
        }
      );
    } catch (err) {
      console.warn("Logout failed, cleanup anyway", err);
    }

    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_role");
    delete axios.defaults.headers.common["Authorization"];
    authStore.clearUser();

    navigateTo("/SignIn");
  };

  const initAuth = async () => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      setAuthHeader();
      try {
        await fetchUser();
      } catch (err) {
        console.warn("Token invalid or expired, logging out");
        await logout();
      }
    } else {
      navigateTo("/SignIn");
    }
  };

  return { login, fetchUser, logout, initAuth };
}
