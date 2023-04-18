import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '../data/routes'

Vue.use(VueRouter)

import VuePageTitle from 'vue-page-title'
Vue.use(VuePageTitle, {
  suffix: getSuffixName()
})

function getSuffixName() {
  if (window.location.hostname === "abbeynox.com") {
    return " 🖤 Abbey Nox"
  }
  else {
    return " 🌎 yao.earth"
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL, 
  scrollBehavior() {
    return { x: 0, y: 0 };
  },

  routes: routes
})


export default router