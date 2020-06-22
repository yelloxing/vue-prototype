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
      path: '/timeFilters',
      component: resolve => require(['./pages/time@Filters.vue'], resolve)
    },
    {
      path: '/inputCtrlDirectives',
      component: resolve => require(['./pages/inputCtrl@Directives.vue'], resolve)
    },
    {
      path: '/timeComponents',
      component: resolve => require(['./pages/time@Components.vue'], resolve)
    },
    {
      path: '/*',
      redirect: 'inputCtrlDirectives'
    }]
});

export default router;
