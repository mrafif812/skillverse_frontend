<template>
  <div class="flex flex-col min-h-screen">
    <Header></Header>
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Header from './components/ui/Header.vue'
import Footer from './components/ui/Footer.vue'
import useAuthStore from './stores/auth';
import { useRouter } from 'vue-router';


const authUser = useAuthStore();
const router = useRouter();

onMounted(async () => {
  console.log('mounted called');
  await authUser.fetchUser();
  console.log(authUser.user);
  if(authUser.user){
    router.push({name: 'dashboard'})
  }
});

</script>
