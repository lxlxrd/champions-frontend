<template>
  <TheHeader />
  <div class="d-flex min-vh-100 bg-light">
    <DashboardSideBar />
    <div class="flex-grow-1 p-4">
      <!-- Composant d'en-tête dynamique -->
      <component :is="currentHeaderComponent" />
      <!-- Contenu de la page -->
      <slot />
    </div>
  </div>
</template>

<script setup>


import { useRoute } from 'vue-router'
import { computed } from 'vue'

import DashboardHeader from '/components/Dashboard/Header.vue'
import DashboardSettingsHeader from '/components/Dashboard/SettingsHeader.vue'
import DashboardNotifHeader from '/components/Dashboard/NotifHeader.vue'

const route = useRoute()

const currentHeaderComponent = computed(() => {
  const path = route.path

  if (path.includes('/settings')) {
    return DashboardSettingsHeader
  } else if (path.includes('/notifications') || path.includes('/notif')) {
    return DashboardNotifHeader
  } else {
    return DashboardHeader
  }
})
</script>
