export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();

  // Ne pas exécuter sur les routes publiques
  const publicRoutes = ["/SignIn", "/players/register"];
  if (publicRoutes.includes(to.path)) return;

  if (!authStore.isLoggedIn) {
    try {
      await authStore.init(); // tente de récupérer la session
    } catch (e) {
      return navigateTo("/SignIn");
    }
  }

  if (!authStore.user) {
    return navigateTo("/SignIn");
  }
});
