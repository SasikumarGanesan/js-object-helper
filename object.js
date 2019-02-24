/**
 * 
 * @param {Object} object 
 * @returns {number} 
 */

const objectLength = (object) => Object.keys(object).length;


// module export

module.exports = {
    length: objectLength
};