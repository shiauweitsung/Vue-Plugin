import axios from 'axios'
export default {
  namespaced: true,
  state: {
    data: []
  },
  actions: {
    getProducts: function (context) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      axios.get(url).then(function (res) {
        console.log(res)
        context.commit('PRODUCTS', res.data.products)
      })
    }
  },
  mutations: {
    PRODUCTS: function (state, payload) {
      state.data = payload
    }
  },
  getters: {
    products(state) {
      return state.data
    }
  }
}