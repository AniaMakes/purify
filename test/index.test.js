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

//CONCAT NAMES

test('concatinating names', function(){
  const expected1 = ["Bob Smith", "Jo Evans", "Lou Wilson"];
  const expected2 = ["Olivier Twist","Oscar Wild","Edith Piaf"];
  const result1 = importedFunctions.concatNames([{firstName:"Bob", lastName:"Smith"}, {firstName:"Jo", lastName:"Evans"}, {firstName:"Lou", lastName:"Wilson"}]);
  const result2 = importedFunctions.concatNames([{firstName:"Olivier", lastName:"Twist"},{firstName:"Oscar", lastName:"Wild"},{firstName:"Edith", lastName:"Piaf"}]);
  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);
});


//CONVERT NUMBERS IN ARRAY TO STRINGS


test('converting numbers to strings', function(){
  const expected1 = ["1","2","3","4"];
  const expected2 = ["4","5","6","7"];
  const result1 = importedFunctions.numbersToStrings([1,"2",3,"4"]);
  const result2 = importedFunctions.numbersToStrings([4,"5",6,"7"]);
  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);

});

//SORT STRING BY LENGTH

test('sorting strings by length', function(){
  const expected1 = ["red", "blue","green","orange"];
  const expected2 = ["grey", "purple", "turquoise","aquamarine"];
  const result1 = importedFunctions.sortByLength(["red","orange","blue","green"]);
  const result2 = importedFunctions.sortByLength(["purple", "aquamarine", "grey", "turquoise"])
  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);
});


//LAST NUMBERS

test('slice last two numbers', function(){
  const expected1 = [3,4];
  const expected2 = [7,8];
  const result1 = importedFunctions.lastTwo([1,2,3,4]);
  const result2 = importedFunctions.lastTwo([5,6,7,8]);
  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);

});

//INCREMENT THE YEARS BY ONE YEAR FOR ALL CARS

test('increment car years by one', function(){
  const expected1 = [
  {make:"Renault", model:"Clio", year:1995},
  {make:"Honda", model:"Jazz",year:2005},
  {make:"Renault", model:"Matiz",year:1999},];

  const expected2 = [
  {make:"Tesla", model:"Model S", year:2018},
  {make:"Renault", model:"Megane", year:2000},
  {make:"Fiat", model:"126p",year:1990}];

  const result1input = [
  {make:"Renault", model:"Clio", year:1994},
  {make:"Honda", model:"Jazz",year:2004},
  {make:"Renault", model:"Matiz",year:1998},];

  const result2input = [
  {make:"Tesla", model:"Model S", year:2017},
  {make:"Renault", model:"Megane", year:1999},
  {make:"Fiat", model:"126p",year:1989}];

  const result1 = importedFunctions.incrementYear(result1input);
  const result2 = importedFunctions.incrementYear(result2input);

  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);
});


//CALCULATE EACH PERSON'S SALES

test('calculate the sales', function(){
  const expected1 = [];
  const expected2 =[];
  const result1 = importedFunctions.totalSales();
  const result2 = importedFunctions.totalSales();
});


//SWAP KEYS AND VALUES

test('swap keys and values', function(){
  const expected1 = [];
  const expected2 =[];
  const result1 = importedFunctions.swapKeysAndValues();
  const result2 = importedFunctions.swapKeysAndValues();

});

//PARSE DATES

test('parse Dates', function(){
  const expected1 = [];
  const expected2 =[];
  const result1 = importedFunctions.parseDates();
  const result2 = importedFunctions.parseDates();

});

























