//进行axios二次封装
import axios from "axios";
import { ElMessage } from "element-plus";
//第一部利用axios对象的create方法，创建一个axios实例来配置一些其他属性
let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, //这里是面对开发需求，实际是/api(假接口里写的)
  timeout: 5000, //超时时间设置
});
//第二步给request添加拦截器
request.interceptors.request.use((config) => {
  //config配置对象，headers属性请求头，经常给服务器端携带公共参数
  //返回配置对象
  return config;
});

request.interceptors.response.use(
  (response) => {
    //成功回调
    //可以用于简化数据
    return response.data;
  },
  (error) => {
    //失败回调，主要处理网络错误
    //定义一个变量存储网络错误信息
    let message = "";
    let status = error.response.status;
    switch (status) {
      case 401:
        message = "TOKEN过期";
        break;
      case 403:
        message = "无权访问";
        break;
      case 404:
        message = "请求地址错误";
        break;
      case 500:
        message = "服务器瓦特了";
        break;
      default:
        message = "网络离家出走了";
        break;
    }
    //提示错误信息
    ElMessage({
      type: "error",
      message,
    });
    //处理一下
    return Promise.reject(error);
  }
);

//对外暴露
export default request;
