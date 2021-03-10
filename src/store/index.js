import Vue from 'vue'
import Vuex from 'vuex'
import productsMoudles from './products'
import vuexvalue from './vuexValue'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    message: []
  },
  actions: {
    updateMessage: function (context, {
      message,
      status
    }) {
      const timestemp = Math.floor(new Date() / 1000)
      const messages = {
        message,
        status,
        timestemp
      }
      context.commit('ALERTMESSAGE', messages)
      // context.dispatch('removeMessage', timestemp)
    },
    removeMessage: function (context, timestemp) {
      setTimeout(function () {
        // vm.message.forEach(function (item, i) {
        //   if (item.timestemp === timestemp) {
        //     vm.message.splice(i, 1)
        //   }
        // })
        context.commit('REMOVEMESSAGE', timestemp)
      }, 3000)
    },
    removeMessageNow: function (context, num) {
      context.commit('REMOVEMESSAGENOW', num)
    }
  },
  mutations: {
    ALERTMESSAGE(state, payload) {
      console.log(payload)
      state.message.push(payload)
    },
    REMOVEMESSAGE(state, payload) {
      state.message.forEach(function (item, i) {
        if (item.timestemp === payload) {
          state.message.splice(i, 1)
        }
      })
    },
    REMOVEMESSAGENOW(state, payload) {
      state.message.splice(payload, 1)
    }
  },
  getters: {
    message(state) {
      return state.message
    }
  },
  modules: {
    productsMoudles,
    vuexvalue
  }
})