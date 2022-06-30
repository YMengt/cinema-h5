import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'
import { Toast } from 'vant'

import movieRouter from "./movie"
import MineRouter from "./mine"
import CinemaRouter from "./cinema"
import Message from './message'
const router = createRouter({
  history: createWebHashHistory(),
  routes:[
    movieRouter,
    MineRouter,
    CinemaRouter,
    Message,
    {
      path:'/',
      redirect:'/movie/nowPlaying'
    },
    {
      path:'/movieDetails',
      // name:"NowPlayingDetail",
      // component:()=>import("../views/MovieDetail")
    }
    // {
    //   path:'/movieDetails',
    //   redirect:'/movieDetails/:id',
     
    //   children:[{
    //     path:':id',
    //     component:()=>import('../views/MovieDetail/NowPlayingDetail.vue')
    //   }]

    // },

  ]
})


// 前置守卫
router.beforeEach((to,from)=>{
  if(to.path==='/movie'){
    return to.path={path:'/movie/nowPlaying'}
  }

  // if(to.meta.hasLogin===true){ 
  //   if(!store.state.isLogin){
  //     Toast.fail("请先登录");
  //    return  to.path={path:'/login',query:{redirect:to.fullPath}}
  //   }
  // }

  

})


export default router
