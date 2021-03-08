import Vue from 'vue'
import Vuex from 'vuex'
import productsMoudles from './products'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  modules: {
    productsMoudles
  }
})