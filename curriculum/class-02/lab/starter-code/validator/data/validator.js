'use strict';

class Validator {

  constructor(schema) {
    this.schema = schema;
  }

  isString(input) {
    return typeof input === 'string';
  }

  isObject(input) {
      return typeof input === {};
   }

  isArray(input, valueType) { 
      return typeof input === [];
      //array.isarray ??
  }

  isBoolean(input) {
      return typeof input === 'boolean';
  }

  isNumber(input) {
      return typeof input === 'number';
  }

  isFunction(input) {
      return typeof input === 'function';
  }

  isTruthy(input) {}

  // Vinicio - checks an object against a schema
  // isValid(data, schema)
  // isValidObject in my demo code
  isValid(data) {
  }
}

module.exports = Validator;