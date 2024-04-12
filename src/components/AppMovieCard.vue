<template>
  <router-link :to="{ name: 'movie', params: { id: props.item.id } }">
    <div @click="movieStore.id = props.item.id" class="card">
      <img :src="props.item.poster?.url" alt="" class="image" />
      <h2>{{ props.item.alternativeName }}</h2>
      <!-- <p>{{ props.item.description }}</p> -->
    </div>
  </router-link>
</template>
<script setup>
import { useMovieStore } from '../store/useMovieStore'

const movieStore = useMovieStore()

const props = defineProps({
  item: {
    type: Object,
    require: true
  }
})
</script>
<style scoped>
.card {
  width: 200px;
}

.image {
  width: 100%;
}
</style>
