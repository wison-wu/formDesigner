import Vue from 'vue'
import VueRouter from 'vue-router'
import designer from '@/components/formDesigner'
import dialogTest from '@/components/dialogTest'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'designer',
    component: designer
  },{
    path: '/dialog',
    name: 'dialogTest',
    component: dialogTest
  }
]

const router = new VueRouter({
  routes
})

export default router
