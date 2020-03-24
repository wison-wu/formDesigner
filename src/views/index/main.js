import vue from 'vue'
import App from './App.vue'
import router from '@/router'

vue.config.productionTip = false

new vue({
  router,
  render: h => h(App)
}).$mount('#app')
