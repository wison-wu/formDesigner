import Vue from 'vue'
import VueRouter from 'vue-router'
import designer from '@/components/FancyFormDesigner'
import test from '@/components/test'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'designer',
    component: designer
  },
  {
    path: '/test',
    name: 'test',
    component: test
  }
]

const router = new VueRouter({
  routes
})

export default router
