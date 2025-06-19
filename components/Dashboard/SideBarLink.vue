<template>
  <li class="nav-item">
    <NuxtLink
      :to="to"
      class="nav-link d-flex align-items-center gap-2 px-3 py-2 rounded text-dark sidebar-link"
      :class="customClass"
      active-class="active"
    >
      <slot />
      <span class="ms-1 link-label">{{ label }}</span>
    </NuxtLink>
  </li>
</template>

<script setup>
defineProps({
  to: String,
  label: String,
  customClass: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.nav-link img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

/* Style par défaut du lien */
.sidebar-link {
  border-left: 4px solid transparent;
  background-color: white;
  color: #000;
  transition: all 0.2s ease-in-out;
}

/* Appliquer couleur et fond actif */
.sidebar-link.active {
  background-color: #fefaf1;
  border-left: 4px solid #d2910a;
}

/* Couleur texte + gras uniquement sur le texte */
.sidebar-link.active .link-label {
  color: #d2910a;
  font-weight: bold;
}

/* Appliquer la couleur à l’image si besoin */
.sidebar-link.active img {
  filter: brightness(0) saturate(100%) invert(64%) sepia(57%) saturate(741%)
    hue-rotate(5deg) brightness(95%) contrast(87%);
}
</style>
