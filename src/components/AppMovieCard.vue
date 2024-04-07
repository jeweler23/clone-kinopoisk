<template>
    <div>
        <img :src="props.item.poster?.url" alt="" class="image">
        <h2>{{ props.item.alternativeName }}</h2>
        <p>{{ props.item.description }}</p>

    </div>
</template>
<script setup>

import { ref } from 'vue';


const props = defineProps({
    item: {
        type: Object,
        require: true
    },

})

</script>
<style scoped>
.image {
    width: 200px
}
</style>