import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from '@/views/SignView'
import UserView from '@/views/UserView'
import UsersView from '@/views/UsersView'
import NotFound from '@/views/NotFound'

import { getRefreshToken } from '@/services/login';

// import store from '@/store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth: true,
    }
    // beforeEnter: (to, from, next) => {
    //   const isLogin = store.getters.isLogin;
    //   if (isLogin) {
    //     return next();
    //   }
    //   alert('로그인을 해야합니다.');
    //   return next('/login');
    // }
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView,
  },
  {
    path: '/users/:id',
    name: 'users',
    component: UserView,
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignInView,
  },
  {
    path: '/notFound',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/notFound', 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  console.log('router beforeEach');
  const accessToken = Vue.$cookies.get('accessToken');
  const refreshToken = Vue.$cookies.get('refreshToken');

  if(to.meta.requireAuth && !accessToken && refreshToken) {
    await getRefreshToken();
  }

  if(to.meta.requireAuth && !refreshToken) {
    next('/login');
    return;
  }
  
  next();
})

export default router
