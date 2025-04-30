<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/ui/Header.vue'
import Footer from './components/ui/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header></Header>
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer></Footer>
  </div>
</template>