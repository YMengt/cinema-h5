import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



const app=createApp(App)

//注册vant中的全局组件,也就是插件
import {Toast,Lazyload} from 'vant'
app.use(Toast).use(Lazyload,{
    lazyComponent: true, //懒加载组件打开
    loading:require("./assets/image/loading.gif"),
    error:require('./assets/image/error.jpeg')
  }) 

Toast.setDefaultOptions('loading', { forbidClick: true });//配置在loading时, forbidClick 属性可以禁用背景点击。

//混入一个全局BaseURL
app.mixin({
  data(){
    return {
      BaseURL:'https://m.maizuo.com/',
      
    }
  }
})



app.use(store).use(router).mount('#app')

