import Vue from 'vue'
import Router from 'vue-router'

import movieRouter from "./movie"
import MineRouter from "./mine"
import CinemaRouter from "./cinema"

Vue.use(Router)

const router = new Router({
  mode:'history',
  base:process.env.BASE_URL,
  routes:[
    movieRouter,
    MineRouter,
    CinemaRouter,
    {
      path:'/*',
      redirect:'/movie'
    }

  ]
})

export default router
