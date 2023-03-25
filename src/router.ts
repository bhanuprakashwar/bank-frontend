import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'login',
        component: Login
      }
    ]
  });
  export default router;