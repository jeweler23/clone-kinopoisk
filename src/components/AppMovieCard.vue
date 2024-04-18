<template>
  <router-link :to="{ name: 'movie', params: { id: props.item.id } }">
    <div @click="movieStore.id = props.item.id" class="card">
      <img :src="props.item.poster?.url" alt="" class="image" />
      <h2 class="card-head">{{ props.item?.name }}</h2>
      <p class="card-info">{{ props.item.year }}, {{ props.item.genres[0].name }}</p>
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
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto auto;
}

.image {
  width: 100%;
  justify-self: center;
  /* align-self: center; */
}

.card-head {
}

.card-info {
}
</style>
