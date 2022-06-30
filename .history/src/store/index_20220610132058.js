
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
export default createStore({
  state: {
    isLogin:false,
    userInfo:null,
    token:'',
    cityInfo:0,
                  //  cityId: 210300
                  // isHot: 0
                  // name: "鞍山"
                  // pinyin: "anshan"
   
    nowPlayingMovie:[],
    cinemaList:[],
  },
  mutations: {
    setUserInfo(state,data){
      state.userInfo=data
      state.isLogin=true
    },
    setToken(state,data){
        state.token=data
    },
    clearUserInfo(state){
      state.userInfo=null
      state.isLogin=false
      state.token=""
    },
    setCity(state,data){
      state.cityInfo=data
      
    },
    setMovie(state,data){
      state.nowPlayingMovie=data
    },
    setCinema(state,data){
      state.cinemaList=data
    }
  },
  actions: {
    // setMovieajax({commit},data){
    //    new Promise(function(resolve, reject){
    //     if(data.length!=0){
    //       resolve(data)
    //     }
    //   }).then(function(data){
    //     console.log(data)       
    //   })
    // }
  },
  modules: {
  },
  plugins: [createPersistedState({ //持久化数据
    storage:window.sessionStorage //默认是localStorage
  })],
})
