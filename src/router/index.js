import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import DetailsPage from '../views/DetailsPage/DetailPage.vue'
import Notfound from '../components/Notfound/Notfound.vue'

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
      component: DetailsPage
    },
    { path: '/:pathMatch(.*)*', component: Notfound }
  ]
})

export default router
