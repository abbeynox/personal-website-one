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
        component: () => import('../views/RedirectPage.vue'),
        redirectUri: 'http://github.com/kaiseryao',
        alias: ['/gh', '/git'],
      },
      {
        path: '/facebook',
        component: () => import('../views/RedirectPage.vue'),
        redirectUri: 'https://www.facebook.com/kaikai.kaiser',
        alias: ['/fb'],
      },
      {
        path: '/instagram',
        component: () => import('../views/RedirectPage.vue'),
        redirectUri: 'http://www.instagram.com/yao.earth',
        alias: ['/ig', '/insta']
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
        path: '/discord',
        component: () => import('../views/RedirectPage.vue'),
        redirectUri: 'https://discord.com/users/649332192119357460',
        alias: '/dc'
      },
      {
        path: '/quizlet',
        component: () => import('../views/RedirectPage.vue'),
        redirectUri:  'https://quizlet.com/class/19641601/',
        alias: '/ql'
      },
      {
        path: '/cloud',
        component: () => import('../views/ProjectPage.vue'),
        redirectUri: 'https://cloud.ywk.ch',
        alias: '/cloud/*'
      },
      {
        path: '*', // Nimmt jedes andere Verzeichnis, welches nicht definiert ist. 
        name: '404',
        component: () => import ('../views/404Page.vue')
      }];
export default data;
