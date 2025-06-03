import { useAuthStore } from "@/stores/useAuthStore";

export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore();

  // Redirige uniquement si connecté ET rôle = "parent"
  if (to.path === "/" && auth.isLoggedIn && auth.role === "parent") {
    return navigateTo("/user-dashboard");
  }
});
