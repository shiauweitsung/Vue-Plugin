<template>
  <div>
    <!-- swiper star -->
    <h1>swiper</h1>
    <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="test">
        <img src="https://picsum.photos/200/300" alt="" />
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
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
    <div>{{ swiperOption }}</div>
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
  data () {
    return {
      swiperOptions: {
        spaceBetween: 30,
        centeredSlides: true,
        mousewheel: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }
      }
    }
  },
  methods: {
    updateOption: function (option) {
      this.$emit('option', option)
    }
  }
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
