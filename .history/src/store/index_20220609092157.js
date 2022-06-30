
import { createStore } from 'vuex'
// import createPersistedState from "vuex-persistedstate";
export default createStore({
  state: {
    isLogin:false,
    userInfo:null,
    token:'',
    cityId:0,
    nowPlayingMovie:[]
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
    setCityId(state,data){
      state.cityId=data
      
    },
    setMovie(state,data){
      state.nowPlayingMovie=data
    }
  },
  actions: {
    setMovieajax({commit},data){
      return new Promise(function(resolve, reject){
        if(data.length){
          resolve(data)
        }
      }).then(function(data){
        console.log(data)
        commit("setMovie",data)
      })
     
    }
  },
  modules: {
  },
  // plugins: [createPersistedState({ //持久化数据
  //   // storage:window.sessionStorage //默认是localStorage
  // })],
})
