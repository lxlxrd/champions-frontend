// stores/useAuthStore.ts
import { defineStore } from "pinia";
import { ref } from "vue";

interface User {
  first_name: string;
  last_name: string;
  email: string;

  // ajoute d'autres champs si besoin
}

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const role = ref<string | null>(null);
  const isLoggedIn = ref(false);
  const isInitialized = ref(false); // nouvelle variable

  function setUser(data: any) {
    user.value = data;
    role.value = data.role ?? null;
    isLoggedIn.value = true;
  }

  function clearUser() {
    user.value = null;
    role.value = null;
    isLoggedIn.value = false;
    isInitialized.value = false;
    localStorage.removeItem("keepLoggedIn");
  }

  async function init() {
    try {
      const config = useRuntimeConfig();
      const userData = await $fetch<User>(`${config.public.apiBase}/api/user`, {
        credentials: "include",
      });

      if (userData?.email) {
        setUser(userData);
      } else {
        clearUser();
      }
    } catch (error) {
      clearUser();
    } finally {
      isInitialized.value = true;
    }
  }

  return { user, role, isLoggedIn, setUser, clearUser, init, isInitialized };
});
