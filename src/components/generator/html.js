/**
 * 生成html的核心js函数
 */
let globalConfig


export function vueTemplate(str) {
  return `<template>
    <div>
      ${str}
    </div>
  </template>`
}

export function vueScript(str) {
  return `<script>
    ${str}
  </script>`
}

export function cssStyle(cssStr) {
  return `<style>
    ${cssStr}
  </style>`
}

const items = {
  'input':el =>{
    const {
      disabled, vModel, clearable, placeholder, width
    } = attrBuilder(el)
    const maxlength = el.maxlength ? `:maxlength="${el.maxlength}"` : ''
    //const showWordLimit = el['show-word-limit'] ? 'show-word-limit' : ''
    const readonly = el.readonly ? 'readonly' : ''
    return `<${el.ele} ${vModel} ${placeholder} ${maxlength} ${readonly} ${disabled} ${clearable} />`
  },
  'textarea':el =>{
    const {
      disabled, vModel, clearable, placeholder, width
    } = attrBuilder(el)
    const maxlength = el.maxlength ? `:maxlength="${el.maxlength}"` : ''
    //const showWordLimit = el['show-word-limit'] ? 'show-word-limit' : ''
    const readonly = el.readonly ? 'readonly' : ''
    const type = el.type ? `type="${el.type}"` : ''
    return `<${el.ele} ${vModel} ${type} ${placeholder} ${maxlength} ${readonly} ${disabled} ${clearable} />`
  }
}


function colWrapper(element,str){
  if (element.span) {
    return `<el-col :span="${element.span}">
              ${str}
            </el-col>`
  }
  return str
}

function attrBuilder(el) {
  return {
    vModel: `v-model="${globalConfig.formModel}.${el.id}"`,
    clearable: el.clearable ? 'clearable' : '',
    placeholder: el.placeholder ? `placeholder="${el.placeholder}"` : '',
    //width: el.style && el.style.width ? ':style="{width: \'100%\'}"' : '',
    disabled: el.disabled ? ':disabled=\'true\'' : ''
  }
}


const layout = {
  colFormItem(element) {
    let labelWidth = `label-width="${globalConfig.labelWidth}px"`
    let label = `label="${element.label}"`
    if (element.labelWidth && element.labelWidth !== globalConfig.labelWidth) {
      labelWidth = `label-width="${element.labelWidth}px"`
    }
    if (element.showLabel === false) {
      labelWidth = 'label-width="0"'
      label = ''
    }
    const required = element.required ? 'required' : ''
    const itemDom = items[element.compType] ? items[element.compType](element) : null
    let str = `<el-form-item ${labelWidth} ${label} ${required}>
                ${itemDom}
               </el-form-item>`
    str = colWrapper(element,str);
    return str;
  }
}


/**
 * 生成html源码
 * 表单配置和组件列表
 */
export function buildHtmlSource(itemList,formConf){
  globalConfig = formConf;
  const htmlCode = []
  itemList.forEach(el => {
    htmlCode.push(layout['colFormItem'](el))
  })
  const htmlStr = htmlCode.join('\n') 
  //console.log(htmlStr)
}