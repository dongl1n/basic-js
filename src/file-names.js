const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function counter(arr, index, value){
  let count=0;
  for(let i=0; i<index; i++){
    if(value===arr[i]) count++;
  }  
  if(!count) return '';
  return count;
}


function renameFiles(arr){
  let newArr=[]
  for(let i=0; i<arr.length; i++){
    if(!newArr.includes(arr[i])) newArr.push(arr[i]);
    else{
      let count=counter(arr, i, arr[i]);
      if(!count) newArr.push(arr[i]);
      else newArr.push(arr[i]+'('+counter(arr, i, arr[i])+')');  
    }
  }
  console.log(newArr)
  let d=newArr.filter((number, index, numbers) => {
  return numbers.indexOf(number) !== index;})
  console.log(newArr)
  console.log('___')
  if(d.length!==0) return renameFiles(newArr);
  return newArr;
}

module.exports = {
  renameFiles
};
