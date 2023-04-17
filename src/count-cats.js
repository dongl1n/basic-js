const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard){
	let count=0
	for(key in backyard)
	for(key2 in backyard[key])
	if(backyard[key][key2]==='^^') count++;
	return count;
}

module.exports = {
  countCats
};
