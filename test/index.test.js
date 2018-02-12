//MULTIPLY FUNCTION TEST

const importedFunctions = require("../src/index.js");

test('our multiply function', function(){
  const expected1 = [2,4,6,8,10];
  const expected2 = [1,2,3,4,5];
  const result1 = importedFunctions.multiply([1,2,3,4,5], 2);
  const result2 = importedFunctions.multiply([2,4,6,8,10], 0.5);
  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);
});


//ABSOLUTE

test('get an absolute number', function(){
  const expected1 = [1,2,3,4,5];
  const expected2 = [20,11,15,9,8];
  const result1 = importedFunctions.absolute([-1,2,-3,-4,5]);
  const result2 = importedFunctions.absolute([-20,-11,15,9,-8]);
  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);

});







// const longestString = require('../src/longestString.js');

// test('find longest string', function (){
//   const expected = "james";
//   const result = importedFunctions.longestString(["tom", "james","ed"]);
//   expect(result).toBe(expected);
// or toEqual
// });







