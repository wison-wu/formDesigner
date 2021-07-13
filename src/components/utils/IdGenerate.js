export function getSimpleId(){
  sleep(10); //主要为了延时工作
  const time = new Date().getTime();
  console.log(time);
  return time;
}

const sleep = function(time) {
  const startTime = new Date().getTime() + parseInt(time, 10);
  while(new Date().getTime() < startTime) {}
};

