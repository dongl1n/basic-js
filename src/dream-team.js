const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
const flatSingle = arr => [].concat(...arr);
const flatAll = arr => {
  for(key in arr){
    if(Array.isArray(arr[key])){
      arr=flatSingle(arr);
      flatAll(arr);
    }
  }
  return arr;
}

function createDreamTeam(arr){
  if(!Array.isArray(arr)) return 0;
  let str=[];
  for(key in arr){
    if(typeof arr[key] === 'string'){
      arr[key]=arr[key].toString().trim();
      str.push(arr[key][0].toUpperCase());  
    }
  }
  if(str.length<2) return 0;
  return str.sort().join('');
}

module.exports = {
  createDreamTeam
};
