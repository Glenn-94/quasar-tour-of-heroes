/* eslint-disable quotes */
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') },
      { path: 'heroes', component: () => import('pages/HeroList.vue') },
      { path: 'heroes/:id', component: () => import('pages/HeroDetails.vue') },
    ],
  },

  /*
   * English: The path below will capture all routes that are not defined,
   * leave it as last route.
   * Nederlands: Het pad hieronder zal alle routes die niet gedefinieerd zijn opvangen,
   * laat het als laatste route staan.
   */
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
