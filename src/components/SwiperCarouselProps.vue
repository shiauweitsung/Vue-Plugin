<template>
  <div>
    <!-- swiper star -->
    <h1>swiper</h1>
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide
        :class="swiperClass"
        v-for="data in swiperData"
        :key="data.id"
      >
        <img :src="data.img" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <!-- swiper end -->
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
  props: ['swiperOption', 'swiperClass', 'swiperData'],
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
    width: 100%;
  }
}
</style>
