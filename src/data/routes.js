
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
    redirectUri: 'http://github.com/abbeynox',
    alias: ['/gh', '/git'],
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
    path: '/twitter',
    component: () => import('../views/RedirectPage.vue'),
    redirectUri: 'https://twitter.com/noxabbey'
  },
  {
    path: '/instagram',
    component: () => import('../views/RedirectPage.vue'),
    redirectUri: 'https://instagram.com/abbeynox',
  },
      {
    path: '/mastodon',
    component: () => import('../views/RedirectPage.vue'),
    redirectUri: 'https://mastodon.social/@abbeynox',
  },
  {
    path: '*', // Nimmt jedes andere Verzeichnis, welches nicht definiert ist. 
    name: '404',
    component: () => import('../views/404Page.vue')
  }];

export default data;
