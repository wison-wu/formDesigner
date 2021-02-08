import allData from 'china-area-data/v5/data';

export function areaData(){
  let options = [];
  const allProvinceData = allData['86']; //得到全中国的省
  Object.keys(allProvinceData).forEach(key=>{
    let provinceObj={};
    provinceObj.label= allProvinceData[key];
    provinceObj.value= key;
    const cityData = allData[key];  //市
    provinceObj.children = [];
    Object.keys(cityData).forEach(ckey=>{
      let cityObj = {};
      cityObj.label = cityData[ckey];
      cityObj.value = ckey;
      const areaData = allData[ckey]; //区
      if(typeof areaData !== 'undefined'){
        cityObj.children = [];
        Object.keys(areaData).forEach(akey=>{
          let areaObj = {};
          areaObj.label = areaData[akey];
          areaObj.value = akey;
          cityObj.children.push(areaObj);
        });
      }
      
      provinceObj.children.push(cityObj);
    })
    options.push(provinceObj);
  });
  return options;
}

