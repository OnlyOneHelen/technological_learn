import Vue from 'vue'
import VueRouter from 'vue-router'
import cssList from '../views/cssList/index.vue'
import jsList from '../views/jsList/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'cssList',
    component: cssList
  },
  {
    path: '/js',
    name: 'jsList',
    component: jsList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
