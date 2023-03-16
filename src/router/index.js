import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import DetailsPage from '../views/DetailsPage/DetailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/details/:id',
      // name: details,
      component: DetailsPage
    }
  ]
})

export default router
