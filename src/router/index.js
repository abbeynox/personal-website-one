import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '../views/IndexPage.vue'

Vue.use(VueRouter)

import VuePageTitle from 'vue-page-title'
Vue.use(VuePageTitle, {
  suffix: '🌎yao.earth' // Website Titel falls kein anderes gefunden wurde
})

const router = new VueRouter({
  mode: 'history',
  /*base: process.env.BASE_URL, 
  scrollBehavior() {
    return { x: 0, y: 0 };
  },*/

  routes: [
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
      path: '/stats',
      name: 'stats',
      component: () => import('../views/StatsPage.vue')
    },
    {
      path: '/files/periodensystem',
      name: 'periodensystem',
      component: () => import('../views/files/Periodensystem.vue'), 
      alias: '/periodensystem'
    },
    {
      path: '/stundenplan',
      name: 'stundenplan',
      component: () => import('../views/files/Stundenplan.vue'), 
      alias: '/files/stundenplan'
    },
    {
      path: '/admin',
      beforeEnter() {location.href = '/'}
    },
    {
      path: '/links',
      name: 'links',
      component: () => import('../views/LinksPage.vue')
    },
    {
      path: '/github',
      beforeEnter() {location.href = 'http://github.com/kaiseryao'},
      alias: ['/gh', '/git'],
    },
    {
      path: '/instagram',
      beforeEnter() {location.href = 'http://www.instagram.com/yao.earth'},
      alias: ['/ig', '/insta']
    },
    {
      path: '/linkedin',
      beforeEnter() {location.href = 'https://www.linkedin.com/in/yaokaiser/'},
      alias: ['/li']
    },
    {
      path: '/twitter',
      beforeEnter() {location.href = 'http://www.twitter.com/KaiserYao'},
      alias: '/tw'
    },
    {
      path: '/discord',
      beforeEnter() {location.href = 'https://discord.com/users/649332192119357460'},
      alias: '/dc'
    },
    {
      path: '/quizlet',
      beforeEnter() {location.href = 'https://quizlet.com/class/19641601/'},
      alias: '/ql'
    },
    {
      path: '*', // Nimmt jedes andere Verzeichnis, welches nicht definiert ist. 
      name: '404',
      component: () => import ('../views/404Page.vue')
    }
  ]

})


export default router