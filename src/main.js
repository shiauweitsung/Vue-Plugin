import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/sass/main.scss'
import 'jquery'
import * as ScrollMagic from "scrollmagic"
import {
  TweenMax,
  TimelineMax
} from "gsap"
import {
  ScrollMagicPluginGsap
} from "scrollmagic-plugin-gsap"
import VueCarousel from 'vue-carousel';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators')
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
Vue.use(VueCarousel);
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')