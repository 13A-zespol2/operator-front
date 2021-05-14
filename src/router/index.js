import Vue from 'vue';
import VueRouter from 'vue-router';
import Header from "../components/Header"
import Footer from "../components/Footer"

Vue.use(VueRouter);
Vue.component('my-header',Header)
Vue.component('my-footer',Footer)
const loggedInGuard = (to, from, next) => {
  if (sessionStorage.getItem('loggedIn')) {
    next();
  } else {
    next('/');
  }
};

const notLoggedInGuard = (to, from, next) => {
  if (sessionStorage.getItem('loggedIn')) {
    next('/dashboard');
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'Block',
    component: () => import('../components/packages'),
    beforeEnter: notLoggedInGuard,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../components/Dashboard'),
    beforeEnter: loggedInGuard,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
