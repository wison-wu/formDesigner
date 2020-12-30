import vue from 'vue'
import App from './App.vue'
import './assets/iconfont/iconfont.js'
import plugins from './components/index';
import './assets/iconfont/iconfont.css'
//import formDesigner from './index'
import router from '@/router'

vue.config.productionTip = false
vue.use(plugins);

new vue({
  router,
  render: h => h(App)
}).$mount('#app')
