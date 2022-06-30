import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import eventHub from './utils/mitt'

import './assets/css/iconfont/iconfont.css'

import {initAMapApiLoader} from '@vuemap/vue-amap';
initAMapApiLoader({
  key: '7da2ed62573a4138b58e8490f67d79d4'//高德
})

import '@vuemap/vue-amap/dist/style.css'

const app=createApp(App)

// 配置全局事件总线
app.config.globalProperties.eventHub = eventHub;

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

