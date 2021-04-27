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
    path: "",
    component: () => import("../components/products")
  },
  {
    path: "value",
    name: "vuexValue",
    component: () => import("../components/VuexValue")
  }
  ]
},
{
  path: "/pageloading",
  name: "pageloading",
  component: () => import("../views/PageLoading.vue"),
  children: [{
    path: "pageloading1",
    component: () => import("../components/pageloading1.vue"),
  },
  {
    path: "pageloading2",
    name: "pageloading2",
    component: () => import("../components/pageloading2.vue"),
  }
  ]
},
{
  path: "/CartAnimation",
  name: "CartAnimation",
  component: () => import("../views/CartAnimation.vue")
},
{
  path: '/address',
  name: 'address',
  component: () => import('../views/Address.vue')
},
{
  path: '/elementui',
  name: 'elementui',
  component: () => import('../views/Elementui.vue')
},
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router