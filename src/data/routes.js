
const data = [
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
    path: '/education/periodensystem',
    name: 'periodensystem',
    component: () => import('../views/files/Periodensystem.vue'),
    alias: '/files/periodensystem'
  },
  {
    path: '/education/stundenplan',
    name: 'stundenplan',
    component: () => import('../views/Stundenplan.vue'),
    alias: '/stundenplan',
  },
  {
    path: '/links',
    name: 'links',
    component: () => import('../views/LinksPage.vue')
  },
  {
    path: '/github',
    component: () => import('../views/RedirectPage.vue'),
    redirectUri: 'http://github.com/kaiseryao',
    alias: ['/gh', '/git'],
  },
  {
    path: '/linkedin',
    component: () => import('../views/RedirectPage.vue'),
    redirectUri: 'https://www.linkedin.com/in/yaokaiser/',
    alias: ['/li']
  },
  {
    path: '/twitter',
    component: () => import('../views/RedirectPage.vue'),
    redirectUri: 'http://www.twitter.com/KaiserYao',
    alias: '/tw'
  },
  {
    path: '/quizlet',
    component: () => import('../views/RedirectPage.vue'),
    redirectUri: 'https://quizlet.com/class/19641601/',
    alias: '/ql'
  },
  {
    path: '/cv',
    component: () => import('../views/RedirectPage.vue'),
    redirectUri: 'https://cloud.ywk.ch/s/cv',
  },
  {
    path: '/cloud',
    component: () => import('../views/RedirectPage.vue'),
    redirectUri: 'https://cloud.ywk.ch',
  },
  {
    path: '/threema',
    component: () => import('../views/RedirectPage.vue'),
    redirectUri: 'https://threema.id/ZV2A3CMD',
  },
  {
    path: '/mastodon',
    component: () => import('../views/RedirectPage.vue'),
    redirectUri: 'https://mastodon.lol/@yao',
  },
  {
    path: '/pixelfed',
    component: () => import('../views/RedirectPage.vue'),
    redirectUri: 'https://pixelfed.social/yao',
  },
  {
    path: '/matrix',
    component: () => import('../views/RedirectPage.vue'),
    redirectUri: 'https://matrix.to/#/@kaiseryao:matrix.org',
  },
  {
    path: '*', // Nimmt jedes andere Verzeichnis, welches nicht definiert ist. 
    name: '404',
    component: () => import('../views/404Page.vue')
  }];

export default data;
