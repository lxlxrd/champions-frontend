import axios from "axios";
import { useAuthStore } from "@/stores/useAuthStore";

// useAuth.ts
export function useAuth() {
  const authStore = useAuthStore();
  const csrf = async () => {
    await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
      withCredentials: true,
    });
  };

  const login = async (email: string, password: string, keepLoggedIn = false) => {
    await csrf();

    const csrfToken = decodeURIComponent(
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("XSRF-TOKEN="))
        ?.split("=")[1] || ""
    );

    const { data } = await axios.post(
      "http://localhost:8000/login",
      { email, password, keepLoggedIn, },
      {
        withCredentials: true,
        headers: {
          "X-XSRF-TOKEN": csrfToken,
          Accept: "application/json",
        },
      }
    );

    return data; // { redirect, role }
  };

  const fetchUser = async (role: string) => {
    const csrfToken = decodeURIComponent(
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("XSRF-TOKEN="))
        ?.split("=")[1] || ""
    );

    const url =
      role === "admin"
        ? "http://localhost:8000/api/admin-user"
        : "http://localhost:8000/api/user";

    const { data } = await axios.get(url, {
      withCredentials: true,
      headers: {
        "X-XSRF-TOKEN": csrfToken,
        Accept: "application/json",
      },
    });

    return data;
  };

  const logout = async () => {
    const csrfToken = decodeURIComponent(
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("XSRF-TOKEN="))
        ?.split("=")[1] || ""
    );

    try {
      await axios.post(
        "http://localhost:8000/logout",
        {},
        {
          withCredentials: true,
          headers: {
            "X-XSRF-TOKEN": csrfToken,
            Accept: "application/json",
          },
        }
      );

      authStore.clearUser(); // Réinitialise les données utilisateur
      navigateTo("/SignIn");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return {
    login,
    fetchUser,
    logout,
  };
}
