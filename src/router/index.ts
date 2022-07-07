
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
          path: 'convenios',
          name: 'Agreements',
          component: () => import(/* webpackChunkName: "Login" */ '@/views/Agreements.vue'),
        },
        {
          path: 'pacientes',
          name: 'Patients',
          component: () => import(/* webpackChunkName: "Login" */ '@/views/Patiens.vue'),
        },
        {
          path: 'exames',
          name: 'Appointments',
          component: () => import(/* webpackChunkName: "Login" */ '@/views/Appointments.vue'),
        },
        {
          path: 'customer',
          name: 'Customer',
          component: () => import(/* webpackChunkName: "Login" */ '@/views/Customer.vue'),
        },
        {
          path: 'user',
          name: 'User',
          component: () => import(/* webpackChunkName: "Login" */ '@/views/User.vue'),
        },
      ],
    }
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});


export default router;
