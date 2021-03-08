<template>
  <div>
    <h1>imgae load1</h1>
    <ul>
      <li v-for="img in imgObj.imgData" :key="img.id">
        <img v-lazy="img.img" />
      </li>
    </ul>
    <div
      v-lazy-container="{
        selector: 'img',
        error: imgObj.imgError,
        loading: imgObj.imgLoading
      }"
      class="loading-img"
    >
      <img
        :data-src="data.img"
        alt=""
        v-for="data in imgObj.imgData"
        :key="data.id"
        :data-error="imgObj.imgError"
        :data-loading="imgObj.imgLoading"
      />
    </div>
    <a href="https://www.npmjs.com/package/vue-lazyload#demo">參考網址</a>
  </div>
</template>
<script>
export default {
  name: 'imageLoad1',
  data () {
    return {
      imgObj: {
        imgData: [
          {
            img: 'https://picsum.photos/2000?random=8'
          },
          {
            img: 'https://picsum.photos/2000?random=9'
          },
          {
            img: 'https://picsum.photos/2000?random=10'
          },
          {
            img: 'https://picsum.photos/2000?random=11'
          },
          {
            img: 'https://picsum.photos/2000?random=12'
          },
          {
            img: 'https://picsum.photos/2000?random=13'
          },
          {
            img: 'https://picsum.photos/2000?random=14'
          }
        ],
        imgLoading: require('../assets/images/loading/loading.gif'),
        imgError: require('../assets/images/loading/loading.svg'),
      }

    }
  }
}
</script>
<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  li {
    list-style: none;
    margin: 10px;
    & > img {
      width: 200px;
      height: 200px;
    }
  }
}
.loading-img {
  display: flex;
  flex-wrap: wrap;
  & > img {
    width: 200px;
    height: 200px;
  }
}
</style>