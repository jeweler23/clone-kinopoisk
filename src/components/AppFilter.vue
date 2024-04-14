<template>
  <div>
    <Dropdown v-model="selected" :options="sorted" optionLabel="name" placeholder="Сортировка Фильмов"
      class="w-200px md:w-14rem p-2" />
    <Dropdown v-model="amountMoviesOnPage" :options="numbersMovies" optionLabel="name" placeholder="Количество фильмов"
      class="w-200px md:w-14rem p-2" />
  </div>
</template>

<script setup>

import Dropdown from 'primevue/dropdown';


import { onUpdated, ref } from 'vue'

import { useMovieStore } from '../store/useMovieStore'

const emit = defineEmits('amountMovies')

const movieStore = useMovieStore()
const selected = ref()
const sorted = ref([
  { name: 'Дата' },
  { name: 'Рейтинг' },

]);
const amountMoviesOnPage = ref()
const numbersMovies = ref([
  { name: '10' },
  { name: '12' },
  { name: '14' },
  { name: '16' },
  { name: '18' },
])


onUpdated(() => {
  if (selected.value) {
    if (selected.value.name === 'Дата') {
      movieStore.data = movieStore.sortedMovieYears
    }
    if (selected.value.name === 'Рейтинг') {
      movieStore.data = movieStore.filterMovieRating
    }
  }
  if (amountMoviesOnPage.value) {
    movieStore.amountMovie = amountMoviesOnPage.value.name / 2
    // console.log(movieStore.amountMovie, movieStore.amountFilmOnPage);
  }
})
</script>

<style scoped>
.select {
  color: black;
}
</style>
