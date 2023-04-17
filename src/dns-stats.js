const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr){
  let obj={}, str;
  for(let i=0; i<arr.length; i++){
    str='';
    let buf=arr[i].split('.');
    str='.'.concat(buf.reverse().join('.'));
    for(key in obj){
      if(key===('.'.concat(buf.reverse().join('.')))) str='';
    }
    if(str==='') break;
    for(key2 in obj){
      if(str.includes(key2)) obj[key2]+=1; 
      if(key2.includes(str)){ console.log('a')}
    }
    if (typeof obj[str] !== "undefined") {
        obj[str]+=1;  
    }else{
        obj[str]=1;
    }
  }
  for(let i=0; i<arr.length; i++){
    if(arr[i].match(/.[A-Za-z0-9_-]$/)){
      str=arr[i].match(/.[A-Za-z0-9_-]{1,}$/)[0];
      if (typeof obj[str] !== "undefined") {
        obj[str]+=1;  
    }else{
        obj[str]=1;
    }
  }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
