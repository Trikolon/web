import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import(/* webpackChunkName: "projects" */ './views/Projects.vue'),
    },
    {
      path: '/fingerprint',
      name: 'Fingerprint',
      component: () => import(/* webpackChunkName: "fprint" */ './views/Fingerprint.vue'),
    },
  ],
});
