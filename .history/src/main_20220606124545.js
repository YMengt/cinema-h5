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


app.use(store).use(router).mount('#app')

