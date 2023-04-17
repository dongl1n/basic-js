const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options){
  let str2=String(str);
  if(!options.repeatTimes) options.repeatTimes=1;
  if(!options.separator) options.separator='+';
  if(!options.additionSeparator) options.additionSeparator='|';
  if(options.separator && !options.additionRepeatTimes) options.additionRepeatTimes=1;
  options.additionSeparator=String(options.additionSeparator);
  options.separator=String(options.separator);
   if(typeof options.addition==='boolean') options.addition=String(options.addition);
  if(options.addition===null) options.addition='null';
for(let i=0; i<options.repeatTimes; i++){
    for(let j=0; j<options.additionRepeatTimes; j++){
      if(options.addition) str+=options.addition;
      if(j<options.additionRepeatTimes-1) str+=options.additionSeparator;
    }
    if(i<options.repeatTimes-1){
      	str+=options.separator;
	      str+=str2;
    }
  }
  return str;
}

module.exports = {
  repeater
};
