<template>
  <div>
    <h1>vuex products</h1>
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
    ...mapActions('productsMoudles', ['getProducts'])
  },
  computed: {
    ...mapGetters('productsMoudles', ['products'])
  },
  created () {
    this.getProducts()
  }
}
</script>