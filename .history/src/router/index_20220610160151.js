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
      path:'/movieDetails/:id',
      component:()=>import('../views/Movie/MovieDetail.vue')
    },
    {
      path:"/city",
      name:'City',
      component:()=>import('@/components/City'),
    },
    {
      path:'/cinemaDetail/:id',
      name:'CinemaDetail',
      component:()=>import('../views/Cinema/CinemaDetail.vue')
    },
    {
      path:'/cinemaDetail2/:id',
      name:'CinemaDetail2',
      component:()=>import('../views/Cinema/CinemaDetail2.vue')
    },
    {
        path:"/search",
        name:'Search',
        component:()=>import('@/components/Search'),
    },

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
