//引入项目中全部的全局组件
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'

const allGlobalComponent: any = { SvgIcon, Pagination }

//对外暴露插件对象
export default {
    //这里必须叫install方法
  install(app: any) {
    Object.keys(allGlobalComponent).forEach(key=>{
        app.component(key, allGlobalComponent[key])
    })
  },
};
