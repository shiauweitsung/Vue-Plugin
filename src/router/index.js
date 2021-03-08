import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/circle',
    name: 'circle',
    component: () => import( /* webpackChunkName: "about" */ '../views/circleProgress.vue')
  },
  {
    path: '/carousel',
    name: 'carousel',
    component: () => import('../views/Carousel.vue')
  },
  {
    path: "/image",
    name: "Iamge",
    component: () =>
      import("../views/ImageLoad.vue")
  },
  {
    path: "/validate",
    name: "Validate",
    component: () =>
      import("../views/Validate.vue")
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () =>
      import("../views/Calendar.vue")
  },
  {
    path: "/vuex",
    name: "vuex",
    component: () =>
      import("../views/VuexPractice.vue"),
    children: [{
      path: '',
      component: () => import("../components/products")
    }]
  },
]

const router = new VueRouter({
  routes
})

export default router