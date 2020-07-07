import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 配置路由
const router = new VueRouter({
  routes: [
    {
      path: '/moneyFilters',
      component: resolve => require(['./pages/money@Filters.vue'], resolve)
    },
    {
      path: '/*',
      redirect: 'moneyFilters'
    }]
});

export default router;
