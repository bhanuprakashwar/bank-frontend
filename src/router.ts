import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import Account from './components/Account.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'login',
        component: Login
      },
      {
        path: '/account',
        name: 'account',
        component: Account
      }
    ]
  });
  export default router;