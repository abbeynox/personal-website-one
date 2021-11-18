const data = [
  
    {
        path: '/t/redirect', 
        name: 'redirect',
        redirectUri: 'https://bing.com',
        component: () => import('../views/RedirectPage.vue'),
        next() {location.href = 'https://bing.com';},
      },
      {
        path: '/', // Definiert Verzeichnis
        name: 'index', // Seitenname 
        component: () => import('../views/IndexPage.vue') 
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
        path: '/impressum',
        name: 'impressum',
        component: () => import('../views/Impressum.vue')
      },
      {
        path: '/education/periodensystem',
        name: 'periodensystem',
        component: () => import('../views/files/Periodensystem.vue'), 
        alias: '/files/periodensystem'
      },
      {
        path: '/education/stundenplan',
        name: 'stundenplan',
        component: () => import('../views/files/Stundenplan.vue'), 
        alias: '/stundenplan',
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
        path: '/facebook',
        beforeEnter() {location.href = 'https://www.facebook.com/kaikai.kaiser'},
        alias: ['/fb'],
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
        path: '/cloud',
        beforeEnter() {location.href = 'https://cloud.ywk.ch'},
        alias: '/cloud/*'
      },
      {
        path: '*', // Nimmt jedes andere Verzeichnis, welches nicht definiert ist. 
        name: '404',
        component: () => import ('../views/404Page.vue')
      }];
export default data;
