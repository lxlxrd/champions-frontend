import { defineNuxtPlugin } from "nuxt/app";
import { useAuthStore } from "@/stores/useAuthStore";

export default defineNuxtPlugin(async () => {
  const authStore = useAuthStore();

  const keep = localStorage.getItem("keepLoggedIn");

  if (keep && !authStore.isInitialized) {
    await authStore.init();
  }
});
