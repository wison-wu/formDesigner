import vue from 'vue'
import App from './App.vue'
import './assets/iconfont/iconfont.js'
import { quillEditor } from 'vue-quill-editor'
import plugins from './components/index';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import './assets/iconfont/iconfont.css'
//import formDesigner from './index'
import router from '@/router'

vue.config.productionTip = false

vue.use(quillEditor);
vue.use(plugins);

new vue({
  router,
  render: h => h(App)
}).$mount('#app')
