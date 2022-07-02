
import { createRouter, createWebHistory } from 'vue-router';

import { store } from '../store/index';

 const routes = 
 [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue'),
  },
  {
    path: '',
      meta: {
        layout: 'HOME',
      },
      component: () => import(/* webpackChunkName: "Default" */ '@/layouts/Default.vue'),

      children: [
        {
          path: '',
          name: 'Home',
          component: () => import(/* webpackChunkName: "Login" */ '@/views/Home.vue'),
        },
        {
          path: 'exames',
          name: 'Appoitments',
          component: () => import(/* webpackChunkName: "Login" */ '@/views/Appointments.vue'),
        },
      ],
    }
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});


export default router;
