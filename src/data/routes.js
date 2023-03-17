
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
    path: '/stundenplan',
    name: 'stundenplan',
    component: () => import('../views/Stundenplan.vue')
  },
  {
    path: '/music',
    name: 'music',
    component: () => import('../views/MusicPage.vue')
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
    path: '/quizlet',
    component: () => import('../views/RedirectPage.vue'),
    redirectUri: 'https://quizlet.com/class/19641601/',
    alias: '/ql'
  },
  {
    path: '/threema',
    component: () => import('../views/RedirectPage.vue'),
    redirectUri: 'https://threema.id/ZV2A3CMD',
  },
  {
    path: '/mastodon',
    component: () => import('../views/RedirectPage.vue'),
    redirectUri: 'https://mastodon.social/@abbeynox',
  },
  {
    path: '/matrix',
    component: () => import('../views/RedirectPage.vue'),
    redirectUri: 'https://matrix.to/#/@kaiseryao:matrix.org',
  },
  {
    path: '/pronouns',
    component: () => import('../views/RedirectPage.vue'),
    redirectUri: 'https://de.pronouns.page/@abbeynox'
  },
  {
    path: '*', // Nimmt jedes andere Verzeichnis, welches nicht definiert ist. 
    name: '404',
    component: () => import('../views/404Page.vue')
  }];

export default data;
