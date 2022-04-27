
import { createRouter, createWebHistory } from 'vue-router';
//import VueMeta from 'vue-meta';
import { store } from '../store/index';

/* Vue.use(VueMeta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid',
  refreshOnceOnNavigation: true,
});
*/

 const routes = 
 [
  {
    path: '',
      meta: {
        layout: 'HOME',
      },
      component: () => import(/* webpackChunkName: "church" */ '@/layouts/Default.vue'),

      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import(/* webpackChunkName: "church" */ '@/views/Home.vue'),
        },
      ],
    }
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

router.beforeEach((to: { matched: any[]; path: any; }, from: any, next: (arg0: { name: string; query: { redirectTo: any; }; replace: boolean; } | undefined) => void) => {
  if (to.matched.some((record) => record.meta.requiresAuth) && !store.getters.userLoggedIn) {
    // Checking if the route requires auth
    next({
      name: 'userAccess',
      query: { redirectTo: to.path },
      replace: true,
    });
  } else {
    next();
  }
});

export default router;