'use strict';

// Vinicio - this is similar to module.exports = {};, but you are giving it an easier to use name
let validator = module.exports = {};
//allows for export to test outside of file

validator.isLessThanTen = () => {};

validator.isFunction = () => {};

validator.isObjectValid = (data, schema) => {
  //what assumptions do we have so far? 
  //data is going to be an object
  //schema will be an object that has a property called fields 
  //TODO: validate our invariants 
  Object.keys(schema.fields).forEach(expectedProperty => {
    if (!data.hasOwnProperty(expectedProperty)){
      return false;
    }
    console.log(data[expectedProperty]); //value
    console.log(schema.fields[expectedProperty].type); //type
    //is the value correct based on the type 
  });
  return true;
};
//TODO: validate types



// /**
//  * Based on a set of rules, is the input valid?
//  * TODO: Define the rules ... how do we send them in? How do we identify?
//  * @param input
//  * @param rules
//  * @returns {boolean}
//  */
// validator.isValid = (input, rules) => {
//   return true;
// };

// /**
//  * Is this a string?
//  * @param input
//  * @returns {boolean}
//  */

// validator.isString = (input) => {
//   return typeof input === 'string';
// };
