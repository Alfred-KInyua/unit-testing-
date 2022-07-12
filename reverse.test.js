const reverseStr = require('./reverse');

test(`Should return the string reversed`, () => {
  //arrange
  const str = 'hello';
  //act
  const actual = reverseStr(str);

  //assert
  expect(actual).toBe(str.split('').reverse().join(''));
}); //this is a function that throws an error