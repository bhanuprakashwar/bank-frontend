import { createRouter, createWebHistory } from 'vue-router';
import { useStore } from './store';
const Login = () => import('./components/login/Login.vue');
const Account = () => import('./components/account/Account.vue');

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
      component: Account,
      meta:{
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const store = useStore();
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.isAuthenticated) {
      next({
        name: 'login'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;