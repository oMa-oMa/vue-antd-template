import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import spin from './modules/spin'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    spin
  },
  getters
})
