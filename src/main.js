import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import './assets/tailwind.css'
import './style.css'
import App from './App.vue'

import router from './router/index'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'

// Vuetify
import 'vuetify/styles'

import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)
const pinia = createPinia()

app.use(router).use(pinia).use(vuetify).use(PrimeVue).mount('#app')
