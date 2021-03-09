<template>
  <div>
    <h2>page loading 3</h2>
    <LoadingCom />
  </div>
</template>
<script>
export default {
  name: 'page1',
  methods: {

  },
  mounted () {
    const vm = this
    this.$loading.show({ delay: 1000, background: '#444' })   //delay 0ms, default is 300ms
    setTimeout(function () {
      vm.$loading.hide()
    }, 3000)
  }
}
</script>