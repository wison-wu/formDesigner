import formDesigner from '@/components/formDesigner'
import designer from '@/components/designer'
import designItem from '@/components/designItem'
import configPanel from '@/components/configPanel'
import fancyText from '@/components/extend/fancyText'
import fancyHtml from '@/components/extend/fancyHtml'
import fancyEditor from '@/components/extend/fancyEditor'
const plugins = {
  install : function (Vue) {
    Vue.component('form-designer',formDesigner);
    Vue.component('designer',designer);
    Vue.component('designItem',designItem);
    Vue.component('configPanel',configPanel);
    Vue.component('fancy-text',fancyText);
    Vue.component('fancy-html',fancyHtml);
    Vue.component('fancy-editor',fancyEditor);
  }
};
// 这一步判断window.Vue是否存在，因为直接引用vue.min.js， 它会把Vue绑到Window上，我们直接引用打包好的js才能正常跑起来。
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugins);
}
export default plugins;