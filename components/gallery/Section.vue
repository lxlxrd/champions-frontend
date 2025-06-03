<template>
  <section class="gallery-section">
    <!-- Hero banner -->
    <div class="gallery-hero">
      <h2>Gallery</h2>
    </div>

    <!-- Slider section -->
    <div class="gallery-slider">
      <button class="slider-arrow" @click="prevSlide">&#8592;</button>

      <div class="slider-image">
        <img
          :src="sliderImages[currentSlide]"
          :alt="`Slide ${currentSlide + 1}`"
        />
      </div>

      <button class="slider-arrow" @click="nextSlide">&#8594;</button>
    </div>

    <!-- Pagination dots -->
    <div class="dots">
      <span
        class="dot"
        v-for="(img, index) in sliderImages"
        :key="index"
        :class="{ active: index === currentSlide }"
        @click="currentSlide = index"
      ></span>
    </div>

    <!-- Static grid images -->
    <div class="gallery-grid">
      <div
        class="grid-item"
        v-for="(image, index) in galleryImages"
        :key="index"
      >
        <img :src="image" :alt="`Gallery image ${index + 1}`" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const sliderImages = [
  "/images/kids1.png",
  "/images/kids2.png",
  "/images/kids3.png",
  "/images/kids.png",
];

const currentSlide = ref(0);

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % sliderImages.length;
}

function prevSlide() {
  currentSlide.value =
    (currentSlide.value - 1 + sliderImages.length) % sliderImages.length;
}

const galleryImages = [
  "/images/kids1.png",
  "/images/kids2.png",
  "/images/kids3.png",
  "/images/kids.png",
];
</script>

<style scoped>
.gallery-section {
  padding: 60px 1rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  text-align: center;
  margin-bottom: 100px;
}

.gallery-hero {
  height: 250px;
  background: url("/images/kids1.png") no-repeat center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
}

.gallery-hero h2 {
  color: white;
  font-size: 2rem;
  font-weight: bold;
}

.gallery-slider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  max-width: 1200px;
  margin: 0 auto 30px;
  width: 100%;
  flex-wrap: nowrap; /* ⛔️ Empêche le retour à la ligne */
}

.slider-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.slider-arrow {
  background: none;
  border: 2px solid #d2910a;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 1.5rem;
  color: #d2910a;
  cursor: pointer;
  flex-shrink: 0; /* Ne rétrécit pas */
}

.slider-image img {
  width: 100%;
  max-width: 800px;
  height: 400px; /* Hauteur de l'image */
  object-fit: cover;
}

.dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ccc;
}

.dot.active {
  background: #d2910a;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 colonnes */
  gap: 36px;
  margin-top: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem; /* ajoute un peu d'espace sur les côtés */
}

.grid-item img {
  width: 100%;
  height: 360px; /* Hauteur un peu plus grande si tu veux une meilleure balance */
  object-fit: cover;
  border-radius: 12px;
  display: block;
}
</style>
