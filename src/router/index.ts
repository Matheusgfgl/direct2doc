
import { createRouter, createWebHistory } from 'vue-router';

import { store } from '../store/index';

 const routes = 
 [
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
          component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue'),
        },
      ],
    }
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});


export default router;
