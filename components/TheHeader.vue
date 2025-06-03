<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div class="container">
        <NuxtLink class="navbar-brand" href="/">
          <img src="/logo.png" alt="Logo" height="40" />
        </NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <template v-if="isLoggedIn">
              <li class="nav-item">
                <NuxtLink
                  class="nav-link custom-link"
                  href="/"
                  :class="{ active: route.path === '/' }"
                  >Home
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink
                  class="nav-link custom-link"
                  href="/about-us"
                  :class="{ active: route.path === '/about-us' }"
                >
                  About Us</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink
                  class="nav-link custom-link"
                  href="/programs"
                  :class="{ active: route.path === '/programs' }"
                >
                  Programs</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink
                  class="nav-link custom-link"
                  href="/gallery"
                  :class="{ active: route.path === '/gallery' }"
                >
                  Gallery</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink
                  class="nav-link custom-link"
                  href="/contact-us"
                  :class="{ active: route.path === '/contact-us' }"
                  >Contact Us</NuxtLink
                >
              </li>

              <!-- Logout -->
              <NuxtLink to="/" class="btn btn-register" @click.prevent="handleLogout">
                <i class="fas fa-user"></i>
                <span class="ms-2">Logout</span>
              </NuxtLink>

              <span v-if="user">Welcome {{ user.first_name }}!</span>
            </template>

            <!-- Not logged in -->
            <template v-if="!isLoggedIn">
              <NuxtLink
                to="/players/register"
                class="btn btn-register"
                :class="{ active: route.path === '/players/create' }"
              >
                <i class="fas fa-user"></i>
                <span class="ms-2">Register</span>
              </NuxtLink>

              <NuxtLink
                to="/SignIn"
                class="btn btn-signin"
                :class="{ active: route.path === '/SignIn' }"
              >
                Sign In
              </NuxtLink>
            </template>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useAuth } from "~/composables/useAuth";
const route = useRoute();

import { useAuthStore } from "../stores/useAuthStore";
const authStore = useAuthStore();
const { user, isLoggedIn, isInitialized } = storeToRefs(authStore);
const { logout } = useAuth();

const handleLogout = async () => {
  await logout(); 
};
</script>

<style scoped>
/* === Liens nav === */
.custom-link {
  padding: 6px 12px;
  border-radius: 8px;
  transition: background-color 0.2s ease, border 0.2s ease;
  color: #000;
  background-color: white;
}

.custom-link:hover {
  background-color: #fff3cd;
  border: 1px solid #d2910a;
}

.custom-link.active {
  background-color: #d2910a;
  color: white;
  font-weight: 500;
}

/* === Bouton Register === */
.btn-register {
  background-color: #d2910a;
  color: white;
  border: 1px solid #d2910a;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn-register:hover {
  background-color: #fff3cd;
  color: #d2910a;
}

/* Active state (route == /players/create) */
.btn-register.active {
  background-color: #d2910a;
  color: white;
  border: none;
}

/* === Bouton Sign In === */
.btn-signin {
  background-color: white;
  /* color: #0d6efd; */
  /* border: 1px solid #0d6efd; */
  padding: 6px 12px;
  border-radius: 6px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn-signin:hover {
  background-color: #fff3cd;
  /* color: #d2910a; */
}

/* Active state (route == /Sign-In) */
.btn-signin.active {
  background-color: #d2910a;
  color: white;
  border: none;
}
</style>
