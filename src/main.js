import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import '@/assets/tailwind.css';
import router from './router'
import VuePageTransition from 'vue-page-transition';
import './assets/tailwind.css';

import VueCarousel from 'vue-carousel';
import VueScrollReveal from 'vue-scroll-reveal';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;
Vue.config.productionSourceMap = false;
Vue.config.devtools = false;
Vue.config.debug = false;
Vue.config.silent = true;


Vue.use(VueRouter);
Vue.use(VuePageTransition)
Vue.use(VueCarousel);
Vue.use(VueScrollReveal);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
