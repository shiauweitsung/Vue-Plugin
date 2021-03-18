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
    getCategory () {
      // 產品分類 累加方式
      this.category.reduce((allCategory, category) => {
        // console.log('all', allCategory, 'cate', category)
        if (category in allCategory) {
          allCategory[category]++
        } else {
          allCategory[category] = 1
        }
        this.test = allCategory
        return allCategory
      }, {})
      for (let i in this.test) {
        // i 為陣列第一個值得名稱
        // this.test[i] 就為 那個值得後面數值
        this.categorys.push({
          title: i,
          num: this.test[i]
        })
      }
    }
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