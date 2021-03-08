<template>
  <div>
    <h1>imageload3</h1>
    <vue-clazy-load src="https://unsplash.it/500">
      <img src="https://unsplash.it/500" />
      <div class="preloader" slot="placeholder">Loading message</div>
    </vue-clazy-load>
    <a href="https://www.npmjs.com/package/vue-clazy-load">參考網址</a>
  </div>
</template>
<script>
import { VueClazyLoad } from 'vue-clazy-load'
export default {
  name: 'imageload3',
  components: {
    VueClazyLoad
  }
}
</script>