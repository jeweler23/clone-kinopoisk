<template>
    <div>
        <div class="container">
            <AppMovieCard v-for="(item, index) in data" :key="item" :item="item" />
        </div>
    </div>
</template>
<script setup>
import { onMounted, onUpdated, ref } from 'vue';

import { useMovieStore } from '../store/useMovieStore.js';

import AppMovieCard from '../components/AppMovieCard.vue';

const movieStore = useMovieStore();
const data = ref()


onMounted(async () => {
    await movieStore.getMovie()
    data.value = movieStore.data
})

onUpdated(async () => {
    await movieStore.getMovie()
    data.value = movieStore.data
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