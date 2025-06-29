<template>
  <header
    class="d-flex align-items-center justify-content-between px-4 py-3 bg-white no-border"
  >
    <!-- Message -->
    <div class="ms-4">
      <h5 class="fw-bold mb-0">Hello {{ fullName }}👋🏼</h5>
      <!-- <small class="text-muted">Good Morning</small> -->
    </div>

    <!-- Input de recherche -->
    <div class="search-wrapper ms-auto me-3">
      <i class="fas fa-search search-icon"></i>
      <input type="text" placeholder="Search" class="search-input" />
    </div>

    <!-- Notifications -->
    <NuxtLink
      to="/notifications"
      class="btn btn-light me-3 rounded-circle notification-wrapper"
    >
      <i class="fas fa-bell"></i>
    </NuxtLink>

    <!-- Profile dropdown -->
    <div
      class="d-flex align-items-center gap-2 px-2 py-1 bg-white rounded position-relative profile-wrapper"
      @click="toggleDropdown"
      style="cursor: pointer"
    >
      <i
        class="fas fa-user rounded-circle bg-light d-flex align-items-center justify-content-center text-secondary"
        style="width: 36px; height: 36px; font-size: 18px"
      />
      <div>
        <div class="fw-bold">{{ fullName }}</div>
        <small class="text-muted">Parents</small>
      </div>
      <i class="fas fa-chevron-down text-muted"></i>

      <div v-if="isDropdownOpen" class="dropdown-menu-custom">
        <a class="dropdown-item text-dark" href="#">Profile</a>
        <a class="dropdown-item text-dark" href="#">Settings</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item text-danger" href="#" @click.stop="logout">Logout</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/useAuthStore";

const { user } = storeToRefs(useAuthStore());

// Nom complet dynamique
const fullName = computed(() => {
  if (!user.value) return "Invité";
  return `${user.value.first_name} ${user.value.last_name}`;
});

// Rôle affiché (tu peux adapter)
const userRole = computed(() => {
  return "Parents";
});

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const logout = () => {
  console.log("Logging out...");
  // Ajoute ici ta logique réelle de déconnexion
};
</script>

<style scoped>
/* Barre de recherche */
/* Barre de recherche */
.search-wrapper {
  position: relative;
  width: 260px;
}

.search-input {
  width: 100%;
  height: 50px;
  padding: 0 16px 0 40px;
  border: none !important;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  box-shadow: none !important;
  background-color: #f9f9f9;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  color: #888;
  font-size: 16px;
}

/* Notification button sans bordure ni ombre */
.notification-wrapper {
  width: 48px;
  height: 48px;
  background-color: #f5f5f5;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none !important;
  outline: none;
  box-shadow: none !important;
}

.notification-wrapper:hover {
  background-color: #eaeaea;
}

.notification-wrapper i {
  font-size: 18px;
  color: #222;
}

/* Dropdown personnalisé */
.dropdown-menu-custom {
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 8px;
  margin-bottom: 24px;
  background: white;
  border-radius: 8px;
  border: none !important;
  box-shadow: none !important;
  z-index: 100;
  min-width: 160px;
  padding: 0.5rem;
}

.dropdown-item {
  display: block;
  padding: 8px 12px;
  color: #333;
  text-decoration: none;
  border-radius: 6px;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}

.dropdown-divider {
  margin: 8px 0;
  border-top: 1px solid #eee;
}

/* Suppression globale des bordures et ombres */
header,
.no-border,
.profile-wrapper,
.notification-wrapper,
.search-wrapper,
.dropdown-menu-custom {
  border: none !important;
  box-shadow: none !important;
  background-color: transparent;
}
</style>
