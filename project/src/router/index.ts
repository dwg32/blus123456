//通过vue-router插件来实现模板路由配置
import { createRouter, createWebHashHistory } from 'vue-router';
import { constantRoute } from './routes';

//创建路由器
let router = createRouter({
  //路由模式 hash/history 这个用的hash
  history: createWebHashHistory(),
  routes: constantRoute,
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});

//记得暴露路由让外部使用
export default router;
