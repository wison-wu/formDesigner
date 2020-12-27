import Vue from 'vue'
import VueRouter from 'vue-router'
import designer from '@/components/formDesigner'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'designer',
    component: designer
  }
]

const router = new VueRouter({
  routes
})

export default router
