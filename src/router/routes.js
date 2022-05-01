
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
        path: '/cities',
        component: () => import('pages/MainLinks/СityCoordinates.vue'),
        meta:
          {
            auth: true
          }
      },
      {
        path: '/types-of-ads',
        component: () => import('pages/MainLinks/TypesOfAds.vue'),
        meta:
          {
            auth: true
          }
      },
      {
        path: '/specialties',
        component: () => import('pages/MainLinks/Specialties.vue'),
        meta:
          {
            auth: true
          }
      },
      {
        path: '/rate-by-specialty',
        component: () => import('pages/MainLinks/RateBySpecialty.vue'),
        meta:
          {
            auth: true
          }
      },
      {
        path: '/office-staff',
        component: () => import('pages/MainLinks/OfficeStaff.vue'),
        meta:
          {
            auth: true
          }
      },
      {
        path: '/unscheduled-advance-payment-settings',
        component: () => import('pages/MainLinks/UnscheduledAdvancePaymentSettings.vue'),
        meta:
          {
            auth: true
          }
      },
      {
        path: '/types-of-FaQ',
        component: () => import('pages/MainLinks/TypesOfFaQ.vue'),
        meta:
          {
            auth: true
          }
      },
      {
        path: '/worker-files',
        component: () => import('pages/MainLinks/WorkerFiles.vue'),
        meta:
          {
            auth: true
          }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/AuthorizationLayout.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
