import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '../views/IndexPage.vue'

Vue.use(VueRouter)

import VuePageTitle from 'vue-page-title'
Vue.use(VuePageTitle, {
  suffix: '🌎yao.earth' // Website Titel falls kein anderes gefunden wurde
})


const routes = [
  {
    path: '/', // Definiert Verzeichnis
    name: 'index', // Seitenname 
    component: IndexPage 
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectPage.vue') 
  },
  
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminPage.vue')
  },
  {
    path: '/links',
    name: 'links',
    component: () => import('../views/LinksPage.vue')
  },
  {
    path: '*', // Nimmt jedes andere Verzeichnis, welches nicht definiert ist. 
    name: '404',
    component: () => import ('../views/404Page.vue')
  }

]


const router = new VueRouter({
  mode: 'history',
  /*base: process.env.BASE_URL, 
  scrollBehavior() {
    return { x: 0, y: 0 };
  },*/
  routes

})

export default router