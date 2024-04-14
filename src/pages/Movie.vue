<template>
  <div class="container-movie">
    <img :src="selectMovie?.poster.url" alt="" class="image" />
    <div class="movie-description">
      <h2>{{ selectMovie?.name }}</h2>
      <p>{{ selectMovie?.description }}</p>
      <p>Рейтинг - {{ selectMovie?.rating.kp }}</p>
      <div>
        Страна - <span v-for="country of selectMovie?.countries" :key="country">{{ country.name + ' ' }}</span>
      </div>
      <div class="mySwiper">
        <Swiper :slidesPerView="3" :spaceBetween="30" :pagination="{
          clickable: true,
        }" :modules="[Pagination]" class="mySwiper">
          <SwiperSlide v-for="person of selectMovie?.persons" :key="person.id" class="swiper-slide ">
            <AppPersonCard :person="person" />
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { useMovieStore } from '../store/useMovieStore'

import AppPersonCard from '../components/AppPersonCard.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


const movieStore = useMovieStore()

const selectMovie = ref()

//second version

const route = useRoute()

const options = {
  method: 'GET',
  headers: { accept: 'application/json', 'X-API-KEY': 'WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M' }
}

const searchMovie = async () => {
  const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/${route.params.id}`, options)
  const docs = await response.json()
  selectMovie.value = docs
}

onMounted(async () => {
  await searchMovie()
})
</script>
<style scoped>
.container-movie {
  display: grid;
  grid-template-columns: 500px 1fr;
  gap: 50px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

}

.movie-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

img {
  display: block;
  width: 500px;

}

.mySwiper {
  width: 600px;
  height: 270px;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  font-size: 18px;
  background: #fff;
  height: calc((100% - 250px) / 2) !important;
}
</style>
