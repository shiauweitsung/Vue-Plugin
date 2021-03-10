export default {
  namespaced: true,
  state: {
    value: '',
    value2: ''
  },
  actions: {
    getValue(context, message) {
      context.commit('SHOWVALUE', message)
    }
  },
  mutations: {
    SHOWVALUE(state, payload) {
      console.log(state, payload)
      state.value = payload
    }
  },
  getters: {
    value(state) {
      return state.value
    }
  }
}