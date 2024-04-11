<template>
  <div>
    <select v-model="selected">
      <option selected>Выберите один из вариантов</option>
      <option>Дата</option>
      <option>Рейтинг</option>
      <option>Страна</option>
    </select>
  </div>
</template>

<script setup>
import { onUpdated, ref } from 'vue'

import { useMovieStore } from '../store/useMovieStore'

const movieStore = useMovieStore()
const selected = ref()

onUpdated(() => {
  if (selected.value === 'Дата') {
    movieStore.data = movieStore.sortedMovieYears
  }
  if (selected.value === 'Рейтинг') {
    movieStore.data = movieStore.filterMovieRating
  }
})
</script>

<style scoped></style>
