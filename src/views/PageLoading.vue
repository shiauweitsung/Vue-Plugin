<template>
  <div>
    <h1>page loading</h1>
    <router-link to="/pageloading/pageloading1">pageloading1</router-link> |
    <router-link to="/pageloading/pageloading2">pageloading2</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'pageLoading'
}
</script>