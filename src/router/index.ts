import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/Projects.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue'),
    }

  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top instantly when navigating
    return { top: 0 }
  }
});

export default router;

