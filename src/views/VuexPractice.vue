<template>
  <div>
    <h1>vuex練習</h1>
    <router-link to="/vuex">產品頁</router-link> |
    <router-link to="/vuex/value">基本傳值</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'VuexPractice'
}
</script>