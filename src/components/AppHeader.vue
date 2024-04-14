<template>
  <div class="header">
    <h1 @click="router.push('/')">Movie Search</h1>

    <AppSearchMovie />

    <AppAuth />
  </div>
</template>
<script setup>
import AppSearchMovie from './AppSearchMovie.vue'
import AppAuth from './AppAuth.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const routerBack = () => {
  router.go(-1)
}
</script>
<style scoped>
.header {
  display: flex;
  background-color: black;
  color: azure;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
}
</style>
