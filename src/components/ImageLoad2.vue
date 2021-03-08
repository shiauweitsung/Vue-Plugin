<template>
  <div>
    <h1>imageload2</h1>
    <v-lazy-image
      v-for="data in imgData"
      :key="data.id"
      class="image2-img"
      :src="data.img"
      :src-placeholder="require('../assets/images/loading/loading.gif')"
    />
    <a href="https://www.npmjs.com/package/v-lazy-image">參考資料</a>
  </div>
</template>
<script>
export default {
  name: 'imageload2',
  data () {
    return {
      imgData: [
        {
          img: 'https://picsum.photos/2000?random15'
        },
        {
          img: 'https://picsum.photos/2000?random16'
        },
        {
          img: 'https://picsum.photos/2000?random10'
        },
        {
          img: 'https://picsum.photos/2000?random11'
        },
        {
          img: 'https://picsum.photos/2000?random12'
        },
        {
          img: 'https://picsum.photos/2000?random13'
        },
        {
          img: 'https://picsum.photos/2000?random14'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.image2-img {
  width: 200px;
  height: 200px;
}
// .v-lazy-image {
//   filter: blur(10px);
//   transition: filter 0.7s;
// }
// .v-lazy-image-loaded {
//   filter: blur(0);
// }
</style>