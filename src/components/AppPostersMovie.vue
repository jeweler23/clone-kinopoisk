<template>
    <h3>Постеры к Фильму</h3>
    <Swiper :slidesPerView="5" :spaceBetween="30" :pagination="{
        clickable: true,
    }" :modules="[Pagination]" class="mySwiper" style="height: 150px;">
        <SwiperSlide v-for="item of data" :key="item.id" class="swiper-slide ">
            <img :src="`${item.url}`" alt="" style="height: 100px;">
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
import { useRoute } from 'vue-router';

import { onMounted, ref } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


const route = useRoute()

const data = ref()

const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'X-API-KEY': 'WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M' }
}

const getMovie = async () => {
    const response = await fetch(
        `https://api.kinopoisk.dev/v1.4/image?page=1&limit=20&movieId=${route.params.id}`,
        options
    )
    const { docs } = await response.json()
    data.value = docs
}

onMounted(async () => {
    await getMovie()
})


</script>

<style scoped>
img {
    width: 100px;
}

.mySwiper {
    width: 600px;
    /* height: 100px; */
}

.swiper {
    margin-left: auto;
    margin-right: auto;
}

.swiper-slide {
    font-size: 18px;
    background: #fff;
    height: calc((100% - 100px) / 1) !important;
}
</style>