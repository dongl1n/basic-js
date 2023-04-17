const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(address) {
  return address.match(/@([-A-Za-z0-9\.]){1,}.[A-Za-z]{1,}$/)[0].slice(1);
}

module.exports = {
  getEmailDomain
};
