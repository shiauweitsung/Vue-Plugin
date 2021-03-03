<template>
  <div>
    <h1>Carousel 輪播套件</h1>
    <!-- <router-link to="/Carousel">slick</router-link> |
    <router-link to="/Carousel/swiper">swiper</router-link> |
    <router-link to="/Carousel/VueCarousel">VueCarousel</router-link>
    <router-view></router-view> -->
    <!-- <slick /> -->
    <swiper
      :swiperOption="swiperOptions"
      :swiperClass="swiperClass"
      :swiperData="swiperData"
    ></swiper>
    <!-- <vuecarousel /> -->
  </div>
</template>
<script>
// import slick from '@/components/SlickCarousel.vue'
import swiper from '@/components/SwiperCarouselProps.vue'
// import vuecarousel from '@/components/VueCarousel.vue'
export default {
  name: 'bannerCarousel',
  components: {
    // slick,
    swiper,
    // vuecarousel
  },
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
      },
      swiperClass: 'swiperClassName',
      swiperData: [
        {
          img: 'https://picsum.photos/2000?random=1'
        },
        {
          img: 'https://picsum.photos/2000?random=2'
        },
        {
          img: 'https://picsum.photos/2000?random=3'
        },
        {
          img: 'https://picsum.photos/2000?random=4'
        },
        {
          img: 'https://picsum.photos/2000?random=5'
        },
        {
          img: 'https://picsum.photos/2000?random=6'
        },
        {
          img: 'https://picsum.photos/2000?random=7'
        }
      ]
    }
  }

}
</script>