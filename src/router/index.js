import Vue from 'vue'
import VueRouter from 'vue-router'
import designer from '@/components/formDesigner'
import dialogTest from '@/pages/dialogTest'
import view from '@/pages/view'
import view1 from '@/pages/view1'


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
  },{
    path: '/view',
    name: 'view',
    component: view
  }
]

const router = new VueRouter({
  routes
})

export default router
