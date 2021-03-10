<template>
  <div>
    <h1>vuex products</h1>
    <alert />
    <div v-for="item in products" :key="item.id">
      <p>{{ item.title }}</p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'vuesProducts',
  methods: {
    ...mapActions('productsMoudles', ['getProducts']),
  },
  computed: {
    ...mapGetters('productsMoudles', ['products']),
    // ...mapGetters(['message'])
  },
  mounted () {

  },
  created () {
    this.getProducts()
  }
}
</script>