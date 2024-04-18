<template>
  <div>
    <div v-if="loader" class="absolute z-10 w-full h-screen bg-white">
      <ProgressSpinner
        class="spiner"
        style="width: 50px; height: 50px"
        strokeWidth="8"
        animationDuration=".5s"
        aria-label="Custom ProgressSpinner"
      />
    </div>
    <app-filter />
    <div class="container">
      <Swiper
        :slidesPerView="movieStore.amountMovie"
        :grid="{ rows: 2 }"
        :spaceBetween="30"
        :pagination="{ clickable: true }"
        :modules="[Grid, Pagination]"
        class="mySwiper"
      >
        <SwiperSlide v-for="item in data" :key="item.id" :item="item" class="swiper-slide">
          <AppMovieCard :item="item" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useMovieStore } from '../store/useMovieStore.js'
import AppMovieCard from '../components/AppMovieCard.vue'
import AppFilter from '../components/AppFilter.vue'
import { storeToRefs } from 'pinia'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Grid, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'

import ProgressSpinner from 'primevue/progressspinner'

const movieStore = useMovieStore()
const data = ref(JSON.parse(localStorage.getItem('movie')))

const loader = ref(false)

if (!data.value) {
  loader.value = true
  onMounted(async () => {
    await movieStore.getMovie()
    data.value = movieStore.data
    setTimeout(() => {
      loader.value = false
    }, 1500)
  })
  console.log(data.value)
}
</script>
<style scoped>
.spiner {
  left: 50%;
  top: 50%;
  transform: rotate(-50%, -50%);
}

.head {
  text-align: center;
}

.swiper-wrapper {
  width: 900px;
}

.container {
  margin: 20px;
  display: flex;
  justify-content: center;
  height: 100vh;
  max-width: 1880px;
}

.mySwiper {
  width: 100%;
}

.swiper {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: calc((100% - 200px) / 2) !important;
}

.swiper-pagination {
  /* position: relative; */
  bottom: 300px;
  top: 300px;
}

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  /* position: relative; */
  bottom: 300px;
  top: 300px;
}
</style>
