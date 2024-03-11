import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useToursStore } from '@/stores/tours'
import { RouteName } from '@/constants/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteName.Home,
      component: HomeView
    },
    {
      path: '/drivers',
      name: RouteName.Drivers,
      component: () => import('@/views/DriversView.vue')
    },
    {
      path: '/drivers/new',
      name: RouteName.DriversNew,
      component: () => import('@/views/DriversNewView.vue')
    },
    {
      path: '/tours',
      name: RouteName.Tours,
      component: () => import('@/views/ToursView.vue')
    },
    {
      path: '/tours/new',
      name: RouteName.ToursNew,
      component: () => import('@/views/ToursNewView.vue')
    },
    {
      path: '/tours/:id',
      name: RouteName.ToursEdit,
      component: () => import('@/views/ToursEditView.vue'),
      beforeEnter: (from, to, next) => {
        const { hasTourWithId } = useToursStore()

        if (hasTourWithId(from.params.id as string)) {
          next()
        } else {
          next({ name: RouteName.ToursNew })
        }
      }
    },
    {
      path: '/:pathMatch(.*)*',
      component: HomeView
    }
  ]
})

export default router
