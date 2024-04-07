import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'


export const useMovieStore = defineStore('movieStore', () => {
    const data = ref()
    const searchElem = ref('Dune')
    const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'X-API-KEY': 'WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M' }
    };
    const getMovie = async () => {
        const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=5&query=${searchElem.value}`, options)
        const { docs } = await response.json()
        data.value = docs
    }


    return { data, searchElem, getMovie }
})