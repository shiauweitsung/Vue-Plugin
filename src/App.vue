<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <a href="/circle">Circle</a> |
      <router-link to="/carousel">carousel</router-link> |
      <router-link to="/image">image</router-link> |
      <router-link to="/validate">validate</router-link> |
      <router-link to="/calendar">calendar</router-link> |
      <router-link to="/vuex">vuex</router-link> |
      <router-link to="/pageloading">pageloading</router-link> |
      <router-link to="/CartAnimation">addCart</router-link> |
      <router-link to="/Address">Address</router-link> |
      <router-link to="/elementui">Elementui</router-link> |
      <router-link to="/pagination">pagination</router-link> |
    </div>
    <router-view />
  </div>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
