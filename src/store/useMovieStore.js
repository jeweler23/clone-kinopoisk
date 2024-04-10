import { defineStore } from 'pinia'
import { computed, onMounted, ref, watch } from 'vue'

export const useMovieStore = defineStore('movieStore', () => {
  const data = ref()
  const searchElem = ref('Dune')
  const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'X-API-KEY': 'WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M' }
  }

  const getMovie = async () => {
    const response = await fetch(
      `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${searchElem.value}`,
      options
    )
    const { docs } = await response.json()
    data.value = docs
  }

  watch(searchElem, async () => await getMovie())

  const id = ref(2882)

  const selectMovie = computed(() => data.value.filter((item) => item.id === id.value))

  return { data, searchElem, getMovie, id, selectMovie }
})
