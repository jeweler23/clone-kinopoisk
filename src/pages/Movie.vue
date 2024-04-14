<template>
  <div class="relative">
    <el-button type="danger" class="absolute -top-2 left-12" @click="router.go(-1)">Назад</el-button>
    <div class="container-movie">

      <img :src="selectMovie?.poster.url" alt="" class="image" style="padding: 30px;" />
      <div class="movie-description">
        <h2>{{ selectMovie?.name }}</h2>
        <p>{{ selectMovie?.description }}</p>
        <p>Рейтинг - {{ selectMovie?.rating.kp }}</p>
        <div>
          Страна - <span v-for="country of selectMovie?.countries" :key="country">{{ country.name + ' ' }}</span>
        </div>
        <h3>Список актеров</h3>
        <div class="mySwiper" v-if="selectMovie?.persons">
          <Swiper :slidesPerView="3" :spaceBetween="30" :pagination="{
            clickable: true,
          }" :modules="[Pagination]" class="mySwiper">
            <SwiperSlide v-for="person of selectMovie?.persons" :key="person.id" class="swiper-slide ">
              <AppPersonCard :person="person" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div v-else>
          нет информации о Актерах
        </div>
        <!-- <div v-if="selectMovie.isSeries"></div> -->

        <h3>Похожие фильмы</h3>

        <div class="mySwiper" v-if="selectMovie?.similarMovies">
          <Swiper :slidesPerView="3" :spaceBetween="30" :pagination="{
            clickable: true,
          }" :modules="[Pagination]" class="mySwiper">
            <SwiperSlide v-for="movie of selectMovie?.similarMovies" :key="movie.id" class="swiper-slide ">
              <AppSimilarMovies :movie="movie" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div v-else>
          нет информации о похожих фильмах
        </div>


        <AppPostersMovie />

      </div>
    </div>
  </div>
</template>
<script setup>
import { API_TOKEN } from '../consts/token';
import { ref, onMounted, onBeforeUpdate, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'


import { useMovieStore } from '../store/useMovieStore'

import AppPersonCard from '../components/AppPersonCard.vue';
import AppSimilarMovies from '../components/AppSimilarMovies.vue';
import AppPostersMovie from '../components/AppPostersMovie.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


const movieStore = useMovieStore()

const selectMovie = ref()

const route = ref(useRoute())
const router = useRouter()

const options = {
  method: 'GET',
  headers: { accept: 'application/json', 'X-API-KEY': API_TOKEN }
}

const searchMovie = async () => {
  const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/${route.value.params.id}`, options)
  const docs = await response.json()
  selectMovie.value = docs

}


onMounted(async () => {
  await searchMovie()
})


watch(route, async (newId, oldID) => {
  console.log(newId, oldID);
  if (newId.params.id === oldID.params.id) {
    await searchMovie()
  }
}, { deep: true })

onBeforeUpdate(() => {

})
</script>
<style scoped>
.container-movie {
  display: grid;
  grid-template-columns: 500px 1fr;
  gap: 50px;
  margin: 20px;
  justify-content: center;
  flex-wrap: wrap;

}

.movie-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

h2 {
  font-weight: 800;
  font-size: 32px;
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
