import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import useAuthStore from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login', 
      component: Login, 
      name: 'login',
      meta: {'requiredAuth': false}
    },
    {
      path: '/register', 
      component: Register, 
      name: 'register',
      meta: {'requiredAuth': false}
    },
    {
      path: '/dashboard', 
      component: Register, 
      name: 'dashboard', 
      meta: {'requiredAuth': true}
    }
  ],
});

router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore();
  console.log(to);
  console.log(auth.user);
  if(to.meta.requiredAuth) {
    if(auth.user) {
      next();
    }else {
      next({name: 'login'});
    }
  }else{
    if(auth.user) {
      next({name: 'dashboard'});
    }else {
      next();
    }
  }
})

export default router
