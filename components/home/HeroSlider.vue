<template>
  <section class="py-5">
    <div class="container px-4"> <!-- marges automatiques + largeur max -->
      <div class="rounded-lg overflow-hidden shadow-lg">
        <Swiper :modules="[Autoplay, Pagination]" :slides-per-view="1" :loop="true" :autoplay="{ delay: 5000 }"
          :pagination="{ clickable: true }" class="hero-swiper">
          <SwiperSlide v-for="(slide, index) in slides" :key="index">
            <div class="slide-item relative" :style="{ backgroundImage: `url(${slide.image})` }">
              <div class="overlay"></div>
              <div class="content-container">
                <div class="slide-content text-white text-start">
                  <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
                    {{ slide.title }}
                  </h1>
                  <p class="text-lg md:text-xl">{{ slide.subtitle }}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const slides = [
  {
    title: 'Developing soccer champions through our high quality technical training',
    subtitle: 'Initiation and improvement from an early age',
    image: '/images/slide1.jpg'
  },
  {
    title: 'Train like a pro, play like a champion',
    subtitle: 'Professional coaching for every age group',
    image: '/images/slide2.jpg'
  }
]
</script>

<style scoped>
.hero-swiper {
  height: 600px;
}

.slide-item {
  height: 600px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  z-index: 1;
}

.content-container {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 2rem;
}

.slide-content {
  max-width: 700px;
}
</style>
