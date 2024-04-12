import { defineStore } from 'pinia'
import { computed, onMounted, ref, watch } from 'vue'

export const useMovieStore = defineStore('movieStore', () => {
  const data = ref()
  const searchElem = ref('')
  const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'X-API-KEY': 'WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M' }
  }
  // `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${searchElem.value}`,

  const getMovie = async () => {
    const response = await fetch(
      `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=100&query=${searchElem.value}`,
      options
    )
    const { docs } = await response.json()
    data.value = docs
    localStorage.setItem('movie', JSON.stringify(data.value))
  }

  watch(searchElem, async () => await getMovie())

  const id = ref(2882)

  const selectMovie = computed(() => data.value.filter((item) => item.id === id.value))

  const sortedMovieYears = computed(() =>
    data.value.sort((a, b) => Number(b.year) - Number(a.year))
  )
  const filterMovieRating = computed(() =>
    data.value.sort((a, b) => Number(b.rating.kp) - Number(a.rating.kp))
  )

  return { data, searchElem, getMovie, id, selectMovie, sortedMovieYears, filterMovieRating }
})
