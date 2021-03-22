import vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import './assets/iconfont/iconfont.js'
import plugins from './components/index';
//import formDesigner from './index'
import router from '@/router'

vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.prototype.$axios = axios
vue.use(plugins);

new vue({
  router,
  render: h => h(App)
}).$mount('#app')
