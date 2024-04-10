<template>
  <div>
    <div class="container">
      <AppMovieCard v-for="item in data" :key="item.id" :item="item" />
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUpdated, ref } from 'vue'
import { useMovieStore } from '../store/useMovieStore.js'
import AppMovieCard from '../components/AppMovieCard.vue'
import { storeToRefs } from 'pinia'

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

.container {
  margin: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
</style>
