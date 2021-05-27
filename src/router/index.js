import Vue from 'vue';
import VueRouter from 'vue-router';
import Header from "../components/Header"
import Footer from "../components/Footer"
import Register from "../components/Register"
import Login from "../components/Login"

Vue.use(VueRouter);
Vue.component('my-header',Header)
Vue.component('my-footer',Footer)
Vue.component('register',Register)
Vue.component('login',Login)
const loggedInGuard = (to, from, next) => {
  if (sessionStorage.getItem('loggedIn')) {
    next();
  } else {
    next('/dashboard');
  }
};

const notLoggedInGuard = (to, from, next) => {
  if (sessionStorage.getItem('loggedIn')) {
    next('/login');
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/Login'),
    beforeEnter: notLoggedInGuard,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../components/Dashboard'),
    beforeEnter: loggedInGuard,
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/Register'),

  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
