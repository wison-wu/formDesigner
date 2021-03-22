import formDesigner from '@/components/formDesigner';
import fancyEditor from '@/components/extend/fancyEditor';
import fancyHtml from '@/components/extend/fancyHtml';
import fancyText from '@/components/extend/fancyText';
import fancyDialogList from '@/components/extend/fancyDialogList';
const plugins = {
  install : function (Vue) {
    Vue.component('form-designer',formDesigner);
    Vue.component('fancy-editor',fancyEditor);
    Vue.component('fancy-html',fancyHtml);
    Vue.component('fancy-text',fancyText);
    Vue.component('fancy-dialog-list',fancyDialogList);
  }
};
// 这一步判断window.Vue是否存在，因为直接引用vue.min.js， 它会把Vue绑到Window上，我们直接引用打包好的js才能正常跑起来。
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugins);
}
export default plugins;