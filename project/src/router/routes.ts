//对外暴露配置常量路由
export const constantRoute = [
  {
    //登录
    path: '/login',
    component: () => import('@/views/login/index.vue'), //加载该路由时启用组件
    name: 'login', //命名路由
  },
  {
    //登录成功后展示数据的路由
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'layout',
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404', //redirectto还记得吧，差不多
    name: 'Any',
  },
];
