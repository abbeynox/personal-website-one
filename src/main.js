import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import '@/assets/tailwind.css';
import router from './router'
import VuePageTransition from 'vue-page-transition';
import './assets/tailwind.css';

import VueCarousel from 'vue-carousel';
import VueScrollReveal from 'vue-scroll-reveal';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter);
Vue.use(VuePageTransition)
Vue.use(VueCarousel);
Vue.use(VueScrollReveal);

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
