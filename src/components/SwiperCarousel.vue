<template>
  <div>
    <!-- swiper star -->
    <h1>swiper</h1>
    <swiper
      :class="swiperOption.swiperWrap"
      ref="mySwiper"
      :options="swiperOption.swiperOptions"
    >
      <swiper-slide
        :class="swiperOption.swiperClass"
        v-for="data in swiperOption.swiperData"
        :key="data.id"
      >
        <img :src="data.img" alt="" />
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
        v-if="swiperOption.pagination"
      ></div>
      <div
        class="swiper-button-prev"
        slot="button-prev"
        v-if="swiperOption.navigation.prev"
      ></div>
      <div
        class="swiper-button-next"
        slot="button-next"
        v-if="swiperOption.navigation.next"
      ></div>
    </swiper>
    <!-- swiper end -->
    <p>參考資料</p>
    <p>swiper版本: 5.4.5</p>
    <a href="https://www.npmjs.com/package/vue-awesome-swiper" target="_blank"
      >swiper</a
    >
    <br />
    <br />
    <hr />
    <br />
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
export default {
  name: 'swipers',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  props: ['swiperOption'],
};
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: 200px;
  & > img {
    max-width: 100%;
  }
}
</style>
