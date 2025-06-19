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
  const isInitialized = ref(false);

  function setUser(data: any) {
    user.value = data;
    // Si le backend renvoie le rôle dans user
    if (data.role) {
      role.value = data.role;
      localStorage.setItem("user_role", data.role);
    }
    isLoggedIn.value = true;
  }

  function setRole(newRole: string) {
    role.value = newRole;
    localStorage.setItem("user_role", newRole);
  }

  function clearUser() {
    user.value = null;
    role.value = null;
    isLoggedIn.value = false;
    isInitialized.value = false;
    localStorage.removeItem("keepLoggedIn");
    localStorage.removeItem("user_role");
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

  return {
    user,
    role,
    isLoggedIn,
    isInitialized,
    setUser,
    setRole,
    clearUser,
    init,
  };
});
