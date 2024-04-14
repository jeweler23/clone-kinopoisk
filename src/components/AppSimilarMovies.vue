<template>
    <router-link :to="{ name: 'movie', params: { id: movie.id } }">
        <img :src="`${props.movie.poster.url}`" alt="">
        <p>{{ props.movie.name }}</p>
    </router-link>

</template>

<script setup>
import { ref } from 'vue';



const props = defineProps({
    movie: {
        type: Object
    }
})
</script>

<style scoped>
img {
    width: 100px;
}
</style>