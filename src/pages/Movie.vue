<template>
  <div>
    <!-- <img :src="selectMovie[0]?.backdrop.url" alt="" class="image" />
    <h2>{{ selectMovie[0].alternativeName }}</h2>
    <p>{{ selectMovie[0].description }}</p> -->
    <img :src="selectMovie?.backdrop.url" alt="" class="image" />
    <h2>{{ selectMovie?.name }}</h2>
    <p>{{ selectMovie?.description }}</p>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

//first version
import { useMovieStore } from '../store/useMovieStore'

const movieStore = useMovieStore()
// const selectMovie = movieStore.selectMovie
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
<style></style>
