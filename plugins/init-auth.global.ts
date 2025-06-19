import { defineNuxtPlugin } from "nuxt/app";
import { useAuth } from "@/composables/useAuth";

export default defineNuxtPlugin(async () => {
  const { initAuth } = useAuth();

  // Vérifie si "keepLoggedIn" est activé
  const keep = localStorage.getItem("keepLoggedIn");

  if (keep === "true") {
    // Si l'utilisateur avait choisi de rester connecté, initAuth recharge le user
    await initAuth();
  }
});
