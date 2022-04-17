
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta:
      {
        auth: true
      },
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        meta:
          {
            auth: true
          }
      },
      {
        path: '/users-list',
        component: () => import('pages/MainLinks/UsersPage.vue'),
        meta:
          {
            auth: true
          }
      },
      {
        path: '/rates',
        component: () => import('pages/MainLinks/RatesPage.vue'),
        meta:
          {
            auth: true
          }
      },
      {
        path: '/answer-questions',
        component: () => import('pages/MainLinks/QuestionAnswerPage.vue'),
        meta:
          {
            auth: true
          }
      },
      {
        path: '/referral-program',
        component: () => import('pages/MainLinks/ReferralProgramPage.vue'),
        meta:
          {
            auth: true
          }
      },
      {
        path: '/bugs-errors',
        component: () => import('pages/MainLinks/BugsErrorsPage.vue'),
        meta:
          {
            auth: true
          }
      },
      {
        path: '/creating-ads',
        component: () => import('pages/MainLinks/CreatingAdsPage.vue'),
        meta:
          {
            auth: true
          }
      },
      {
        path: '/report-cards',
        component: () => import('pages/MainLinks/ReportCardsPage.vue'),
        meta:
          {
            auth: true
          }
      },
      {
        path: '/documents',
        component: () => import('pages/MainLinks/DocumentsPage.vue'),
        meta:
          {
            auth: true
          }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/AuthorizationLayout.vue'),
    beforeEnter: (to, from, next) => {
      console.log('middleware')
      next()
    }
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
