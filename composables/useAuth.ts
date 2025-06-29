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

    document.cookie = `keepLoggedIn=${keepLoggedIn}; path=/; max-age=${
      keepLoggedIn ? 60 * 60 * 48 : 0
    }`;

    if (data.role === "admin") {
      window.location.href = "http://localhost:8000/admin/login";
      return;
    }

    if (data.token) {
      localStorage.setItem("auth_token", data.token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    }

    authStore.setUser(data.user);
    return data;
  };

  const fetchUser = async () => {
    setAuthHeader();

    const { data } = await axios.get("http://localhost:8000/api/user", {
      withCredentials: true,
    });

    authStore.setUser(data);
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
    document.cookie =
      "keepLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    delete axios.defaults.headers.common["Authorization"];
    authStore.clearUser();

    window.location.href = "/SignIn";
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
