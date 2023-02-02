import Home from '@/pages/Home';
import ThreadShow from '@/pages/ThreadShow';
import NotFound from '@/pages/NotFound';
import ForumShow from '@/pages/ForumShow';

import Category from '@/pages/Category';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home-page',
    component: Home,
  },
  {
    path: '/category/:id',
    name: 'CategoryShow',
    component: Category,
    props: true,
  },
  {
    path: '/forum/:id',
    name: 'Forum-page',
    component: ForumShow,
    props: true,
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
    beforeEnter(to, from, next) {
      const threadExists = this.$store.state.threads.find(thread => thread.id === to.params.id);
      if (threadExists) {
        return next();
      } else {
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash,
        });
      }
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
