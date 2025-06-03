<template>
  <section class="py-5">
    <div class="container px-4">
      <div class="rounded-lg overflow-hidden shadow-lg">
        <Swiper :modules="[Navigation]" :slides-per-view="1" :loop="true" navigation class="hero-swiper">
          <SwiperSlide v-for="(slide, index) in slides" :key="index">
            <div class="slide-item relative" :style="{ backgroundImage: `url(${slide.image})` }">
              <div class="overlay"></div>
              <div class="content-container">
                <div class="slide-content text-white text-start">
                  <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
                    {{ slide.title }}
                  </h1>
                  <p class="text-lg md:text-xl mb-6">{{ slide.subtitle }}</p>
                  <button class="btn-primary">Lorem Ipsum</button>
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
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

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

.btn-primary {
  background-color: #d2910a;
  color: white;
  padding: 12px 28px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #b27707;
}
</style>
