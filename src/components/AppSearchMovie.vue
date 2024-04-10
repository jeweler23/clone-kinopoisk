<template>
  <v-responsive class="mx-auto" max-width="344">
    <v-text-field
      label="Movie"
      prepend-icon="mdi-magnify"
      v-model="searchValue"
      @keyup.enter="changeSearch"
    ></v-text-field>
  </v-responsive>
</template>

<script setup>
import { ref } from 'vue'

import { useMovieStore } from '../store/useMovieStore'

const searchValue = ref()

const movieStore = useMovieStore()

const changeSearch = async () => {
  movieStore.searchElem = searchValue.value
  //   await movieStore.getMovie()
}
</script>

<style scoped></style>
