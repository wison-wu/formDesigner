import Vue from 'vue'
import VueRouter from 'vue-router'
import designer from '@/components/formDesigner'
import editor from '@/components/extend/fancyEditor'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'designer',
    component: designer
  },{
    path: '/editor',
    name: 'editor',
    component: editor
  }
]

const router = new VueRouter({
  routes
})

export default router
