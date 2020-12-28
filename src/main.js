import vue from 'vue'
import App from './App.vue'
import './assets/iconfont/iconfont.js'
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
//import formDesigner from './index'
import router from '@/router'

vue.config.productionTip = false

vue.use(quillEditor);

new vue({
  router,
  render: h => h(App)
}).$mount('#app')
