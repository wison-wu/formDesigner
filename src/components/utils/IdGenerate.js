let randomId = '';
export function getSimpleId(){
  setTimeout(generateTime(),10);
  console.log(randomId);
  return randomId;
}

function generateTime(){
  randomId = new Date().getTime();
}