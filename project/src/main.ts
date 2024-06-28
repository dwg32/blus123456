import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "@/App.vue";
import "@/styles/index.scss";
//svg插件需要配置代码
import "virtual:svg-icons-register";
//引入自定义插件对象注册整个项目的全局组件
import globalComponent from "@/components";
import router from "./router";
//@ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(globalComponent);
app.use(router);
app.mount("#app");
