<template>
    <div class="mb-4">
      <label class="form-label fw-medium text-dark">Preferred Location*</label>
      <div class="d-flex gap-4">
        <div
          class="form-check"
          v-for="loc in locations"
          :key="loc"
        >
          <input
            class="form-check-input"
            type="radio"
            name="preferred_location"
            :id="`location_${loc.toLowerCase()}`"
            :value="loc.toLowerCase()"
            v-model="form.preferred_location"
          />
          <label
            class="form-check-label text-dark"
            :for="`location_${loc.toLowerCase()}`"
          >
            {{ loc }}
          </label>
        </div>
      </div>
  
      <!-- Affichage en temps réel -->
      <p class="mt-3">
        📍 Selected location: 
        <strong>{{ form.preferred_location || 'None' }}</strong>
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const locations = ['Courtice', 'Bowmanville', 'Newcastle']
  
  const form = ref({
    preferred_location: ''
  })
  </script>
  
  <style scoped>
  .form-check-input {
    cursor: pointer;
  }
  .form-check-label {
    cursor: pointer;
  }
  </style>
  