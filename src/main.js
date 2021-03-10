import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './bus'
import alertMessage from './components/AlertMessage.vue'
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
import VueCarousel from 'vue-carousel'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
// imageload1
import VueLazyload from 'vue-lazyload'
// imageload2
import {
  VLazyImagePlugin
} from "v-lazy-image"
// imageload3
import VueClazyLoad from 'vue-clazy-load'
// vee-validate
import validate from './vee-validate/index'
// calendar
import VCalendar from 'v-calendar'
// calendar2
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// vuex
import Vuex from 'vuex'
import store from './store'
// pageloading1
import Dialog from 'vue-dialog-loading'
// pageloading2
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators')
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

Vue.use(VueCarousel);
Vue.use(VueAwesomeSwiper)

// imageload1
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/images/loading/loading.svg'),
  loading: require('./assets/images/loading/loading.gif'),
  attempt: 1,
  adapter: {
    // loading(listender, Init) {
    //   console.log('loading', listender, Init)
    // },
    // error(listender, Init) {
    //   console.log('error', listender, Init)
    // }
  }
})
// imageload2
Vue.use(VLazyImagePlugin)
// imageload3
Vue.use(VueClazyLoad)
// calendar
Vue.use(VCalendar)
// calendar2
Vue.component('DatePicker', DatePicker)

// vuex
Vue.use(VueAxios, axios)
Vue.use(Vuex)

// pageloading1
Vue.use(Dialog)
// pageloading2
Vue.component('Loading', Loading)
Vue.component('alert', alertMessage)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  validate,
  render: h => h(App)
}).$mount('#app')