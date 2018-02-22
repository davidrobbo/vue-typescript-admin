import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/layout/Layout.vue';
import Dashboard from '@/views/dashboard/index.vue';
import Login from '@/views/Login.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Layout,
      children: [
        {
          path: '',
          component: Dashboard,
          name: 'Dashboard',
          meta: { description: 'Monitor statistics and navigate the site' }
        },
        {
          path: 'feature',
          component: Dashboard,
          name: 'Feature',
        }
      ],
    },
    {
      path: '/login',
      component: Login,
      name: 'Login',
    },
  ],
});
