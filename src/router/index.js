import Vue from 'vue'
import VueRouter from 'vue-router'
import designer from '@/components/formDesigner'
import iconDialog from '@/components/iconDialog'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'designer',
    component: designer
  },{
    path: '/iconDialog',
    name: 'iconDialog',
    component: iconDialog
  }
]

const router = new VueRouter({
  routes
})

export default router
