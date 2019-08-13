'use strict';


//setting up object that can be pushed out to test folder, can do validator. iot call tests 
let validator = module.exports = {};

//lthomas - this is the solution code that Vinicio covered in class 13 Aug
validator.isTypeFunction = (input) => {};

validator.isObjectValid = (data, schema) => {
  //data will be object
  //schema will be object that has property called fields
  //validate? 
  Object.keys(schema.fields).forEact(callbackfn: expectedProperty => {
    if (data.hasOwnProperty(expectedProperty)){
      return false;
    }
    //TODO: Add type validation 
  });
  return true; 
};

//my tests 
validator.isString = (input) => {
  return typeof input === 'string';
};


