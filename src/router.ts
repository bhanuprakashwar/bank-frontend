import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '@/components/Login.vue')
      }
    ]
  });
  export default router;