<template>
    <img :src="`${props.person.photo}`" alt="">
    <p>{{ props.person.name }}</p>

</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    person: {
        type: Object
    }
})
</script>

<style scoped>
img {
    width: 100px;
}
</style>