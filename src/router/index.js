import { createWebHistory, createRouter } from 'vue-router';
import Home from '../pages/Home.vue'
import Movie from '../pages/Movie.vue';



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: "home", component: Home },
        { path: '/movie/:id', name: "movie", component: Movie },
    ],
})

export default router