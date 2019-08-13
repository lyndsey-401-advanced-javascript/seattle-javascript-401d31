'use strict';

const validator = require('../lib/validator');

//lthomas - this is the solution code that Vinicio covered in class 
describe('#validator', () => {
  describe('#isLessThanTen', () => {
    test('normal cases', () => {});
    expect(validator.isLessThanTen(5)).toEqual(true);
    expect(validator.isLessThanTen(11)).toEqual(false);
    expect(validator.isLessThanTen(10)).toEqual(false);
    expect(validator.isLessThanTen(-1)).toEqual(true);
  });
}); 

describe('#isObjectValid', () => {
  test('normal cases', () => {
    const schema = {
      fields: {
        id: {type: 'string'},
        age: {type: 'number'},
        favoriteToys: {type: 'object'},
      },
    };
    expect(validator.isObjectValid(
      data: {id:'Irish', age: 11, favoriteToys: {}}, schema
    )).toEqual(true);
    expect(validator.isObjectValid(
      data: {id: NaN, age: 'helloWorld', favoriteToys: []}, schema
    )).toEqual(false);
  });
}); 

//goals: Can you test for number? 
//Can you test for type?
//Can you test for property rules? 

describe('#isString', () => {
  test('normal cases', () => {});
  expect(validator.isString('hello')).toEqual(true);
  expect(validator.isString("Hello World")).toEqual(true);
  expect(validator.isString(4)).toEqual(false);
  expect(validator.isString([])).toEqual(false);
})





