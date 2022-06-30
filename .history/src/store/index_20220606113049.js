

import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({ //持久化数据
    // storage:window.sessionStorage //默认是localStorage
  })],
})
