const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

const    InitialActivity = 15
const    HalfLife = 5730
const    DecayRate = 0.693

function dateSample(sampleActivity) {
    if (typeof sampleActivity != 'string') {
    return false;
    }
   else if ( isNaN(parseFloat(sampleActivity)) ){
        return false;
    } else {
        time = Math.ceil( Math.log( InitialActivity / parseFloat(sampleActivity) ) * HalfLife / DecayRate )
        return time
    }
}

module.exports = {
  dateSample
};
