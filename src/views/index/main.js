import vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '../../assets/iconfont/iconfont' 
vue.config.productionTip = false

new vue({
  router,
  render: h => h(App)
}).$mount('#app')
