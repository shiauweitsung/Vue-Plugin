<template>
  <div>
    <h1>Carousel</h1>
    <!-- star vue-carousel -->
    <carousel v-bind="setting">
      <slide
        data-index="0"
        data-name="MySlideName"
        @slideclick="handleSlideClick"
      >
        Slide 1 Content
      </slide>
      <slide> Slide 2 Content </slide>
      <slide> Slide 3 Content </slide>
      <slide> Slide 4 Content </slide>
    </carousel>
    <!-- end vue-carousel -->
    <p>參考資料</p>
    <a href="https://www.npmjs.com/package/vue-carousel" target="_blank"
      >vue-carousel</a
    >
  </div>
</template>
<script>
// import vue-carousel
import { Carousel, Slide } from 'vue-carousel'
// end vue-carousel
export default {
  name: 'vueCarousel',
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      setting: {
        autoplay: true,
        loop: true,
        autoplayTimeout: 2000,
        navigationEnabled: true,
        paginationActiveColor: 'blue',
        perPage: 1
      }
    }
  },
  methods: {
    handleSlideClick: function (dataset) {
      console.log(dataset.index, dataset.name, dataset)
      // 點擊圖片事件
    }
  }
}
</script>
<style scope lang="scss" >
.VueCarousel {
  background-color: rgb(154, 255, 133) !important;
}
.VueCarousel-navigation-next {
  right: 25px !important;
}
.VueCarousel-navigation-prev {
  left: 25px !important;
}
.swiper-slide {
  height: 500px !important;
}
</style>
