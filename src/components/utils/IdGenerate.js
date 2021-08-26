export function getSimpleId(){
  sleep(10); //主要为了延时工作
  return new Date().getTime();
}

const sleep = function(time) {
  const startTime = new Date().getTime() + parseInt(time, 10);
  while(new Date().getTime() < startTime) {}
};

