/**
 * 生成js的核心js函数
 */
let globalConfig

export function buildJsSource(itemList,formConf){
  globalConfig = JSON.parse(JSON.stringify(formConf))
  const dataList = []
  const optionsList = []
  const propsList = []
  itemList.forEach(el =>{
    buildAttributes(el, dataList, optionsList, propsList)
  })

  const script = buildexport(
    formConf,
    dataList.join('\n'),
    optionsList.join('\n'),
    propsList.join('\n'),
  )
  globalConfig = null;
  console.log(script);
  return script;
}

function buildAttributes(el, dataList, optionsList, propsList) {
  buildData(el, dataList)

  if (el.options && el.options.length) {
    buildOptions(el, optionsList)
  }

  if (el.props && el.props.props) {
    buildProps(el, propsList)
  }

  // if (el.children) {
  //   el.children.forEach(el2 => {
  //     buildAttributes(el2, dataList, ruleList, optionsList, methodList, propsList, uploadVarList)
  //   })
  // }
}

function buildData(conf, dataList) {
  let value
  if (typeof (conf.value) === 'string' && !conf.multiple) {
    value = `'${conf.value}'`
  } else {
    value = `${JSON.stringify(conf.value)}`
  }
  if(typeof(value) === 'undefined'||value === 'undefined') value = `''`;
  console.log(value);
  dataList.push(`${conf.id}: ${value},`)
}

function buildOptions(conf, optionsList) {
  const str = `${conf.id}Options: ${JSON.stringify(conf.options)},`
  optionsList.push(str)
}

function buildProps(conf, propsList) {
  const str = `${conf.id}Props: ${JSON.stringify(conf.props.props)},`
  propsList.push(str)
}

function buildexport(conf, data, props) {
  const str = `export default {
  components: {},
  props: [],
  data () {
    return {
      ${conf.formModel}: {
        ${data}
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
}`
  return str
}