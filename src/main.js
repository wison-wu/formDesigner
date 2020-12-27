import vue from 'vue'
import App from './App.vue'
import './assets/iconfont/iconfont.js'
//import formDesigner from './index'
import router from '@/router'

vue.config.productionTip = false

//vue.use(formDesigner);

new vue({
  router,
  render: h => h(App)
}).$mount('#app')
