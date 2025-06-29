// stores/useAuthStore.ts
import { defineStore } from "pinia";
import { ref } from "vue";

interface User {
  first_name: string;
  last_name: string;
  email: string;
  email_verified_at?: string | null;
  // ajoute d'autres champs si besoin
}

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const isLoggedIn = ref(false);
  const isInitialized = ref(false);

  function setUser(data: User) {
    user.value = data;
    isLoggedIn.value = true;
  }

  function clearUser() {
    user.value = null;
    isLoggedIn.value = false;
    isInitialized.value = false;
    localStorage.removeItem("keepLoggedIn");
  }

  async function init() {
    try {
      const config = useRuntimeConfig();

      const userData = await $fetch<User>(`${config.public.apiBase}/api/user`, {
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });

      if ((userData as any).role === "admin") {
        clearUser();
        return navigateTo("http://localhost:8000/admin/login"); // ou juste /admin/login
      }

      if (!userData.email_verified_at) {
        clearUser();
        return navigateTo(`/verify-email`);
      }

      setUser(userData);
    } catch (error) {
      clearUser();
    } finally {
      isInitialized.value = true;
    }
  }

  return {
    user,
    isLoggedIn,
    isInitialized,
    setUser,
    clearUser,
    init,
  };
});
