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
// vee validate
import {
  ValidationProvider,
  ValidationObserver,
  localize,
  extend,
  configure
} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import {
  TW,
  messages
} from 'vee-validate/dist/locale/zh_TW.json'
// calendar
import VCalendar from 'v-calendar'
// calendar2
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './store'
Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  })
})
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})
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
// vee validate
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
localize('zh_TW', TW)
// calendar
Vue.use(VCalendar)
// calendar2
Vue.component('DatePicker', DatePicker)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')