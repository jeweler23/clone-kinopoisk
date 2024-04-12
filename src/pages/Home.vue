<template>
  <div>
    <app-filter />
    <!-- <KeepAlive> -->
    <div class="container">
      <Swiper :slidesPerView="3" :grid="{
        rows: 2,
      }" :spaceBetween="30" :pagination="{
        clickable: true,
      }" :modules="[Grid, Pagination]" class="mySwiper">
        <SwiperSlide v-for="item in data" :key="item.id" :item="item" class="swiper-slide ">
          <AppMovieCard :item="item" />
        </SwiperSlide>
      </Swiper>
    </div>
    <!-- </KeepAlive> -->
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useMovieStore } from '../store/useMovieStore.js'
import AppMovieCard from '../components/AppMovieCard.vue'
import AppFilter from '../components/AppFilter.vue'
import { storeToRefs } from 'pinia'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const movieStore = useMovieStore()
const { data } = storeToRefs(movieStore)


onMounted(async () => {
  await movieStore.getMovie()
})
</script>
<style scoped>
.head {
  text-align: center;
}

.swiper-wrapper {
  width: 900px;
}

.container {
  margin: 20px auto;
  height: 100vh;
  /* grid-template-columns: repeat(3, 1fr); */
  gap: 10px;
  width: 100%;
}

.swiper {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: calc((100% - 30px) / 2) !important;
}
</style>
