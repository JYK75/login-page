import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: '',
    refreshToken: '',
  },
  getters: {
    isLogin(state) {
      return state.accessToken !== '';
    }
  },
  mutations: {
    setLogin(state, payload) {
      console.log(payload);
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
    setAccessToken(state, payload) {
      state.accessToken = payload;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
