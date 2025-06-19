<template>
  <div class="card mb-3 shadow-sm rounded overflow-hidden">
    <div class="card-body d-flex flex-column gap-3">
      <!-- Icône + Titre -->
      <div class="d-flex align-items-center gap-3">
        <div class="icon-wrapper d-flex align-items-center justify-content-center">
          <img :src="icon" alt="icon" class="stat-icon" />
        </div>
        <h6 class="card-subtitle text-muted m-0">{{ title }}</h6>
      </div>

      <!-- Valeur -->
      <div class="text-start ps-2">
        <h3 class="card-title fw-bold text-dark mb-0">{{ value }}</h3>
      </div>
    </div>

    <!-- Ligne de séparation -->
    <hr class="m-0" />

    <!-- Date -->
    <div class="px-3 py-2 text-start">
      <small class="text-muted">Update: {{ updatedAt }}</small>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  value: Number,
  updatedAt: String,
});
</script>

<style scoped>
.stat-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
  background-color: #fefaf1;
  border-radius: 8px;
  padding: 6px;
}

.icon-wrapper {
  width: 48px;
  height: 48px;
  background-color: #fefaf1;
  border-radius: 12px;
}
</style>
