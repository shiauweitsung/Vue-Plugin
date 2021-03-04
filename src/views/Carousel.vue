<template>
  <div>
    <h1>Carousel 輪播套件</h1>
    <swiper :swiperOption="swiper1"></swiper>
    <swiper :swiperOption="swiper2"></swiper>
  </div>
</template>
<script>
import swiper from '@/components/SwiperCarousel.vue'
export default {
  name: 'bannerCarousel',
  components: {
    swiper
  },
  data () {
    return {
      swiper1: {
        // swiper data
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
        ],
        swiperOptions: {
          spaceBetween: 30,
          centeredSlides: true,
          mousewheel: true,
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          // pagination dom
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          // navigation dom
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          // response setting
          breakpoints: {
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }
        },
        swiperWrap: 'swiperWrap',
        swiperClass: 'swiperClassName',
        // navigation show
        navigation: {
          prev: true,
          next: true
        },
        // pagination show
        pagination: true
      },
      swiper2: {
        swiperData: [
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
        swiperOptions: {
          slidesPerView: 'auto',
          autoHeight: true,
          height: '300',
          direction: 'vertical',
          spaceBetween: 30,
          mousewheel: true,
          effect: 'fade',
          loop: true,
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
              slidesPerView: 'auto',
            },
          }
        },
        swiperWrap: 'swiperWrap2',
        swiperClass: 'swiperClassName2',
        // navigation show
        navigation: {
          prev: false,
          next: false
        },
        // pagination show
        pagination: true
      }
    }
  }

}
</script>
<style lang="scss">
.swiperClassName {
  height: 300px;
}
.swiperWrap2 {
  height: 300px !important;
}
</style>