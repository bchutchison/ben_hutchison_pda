var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should add 1 to 4 and give 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    const actual = calculator.runningTotal;
    assert.equal(actual, 5);
  })

  it('should subtract 4 from 7 and give 3', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const actual = calculator.runningTotal;
    assert.equal(actual, 3);
  })

  it('should muliply 3 by 5 and give 15', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.equal(actual, 15);
  })

  it('should divide 21 by 7 and give 3', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    const actual = calculator.runningTotal;
    assert.equal(actual, 3);
  })

 it('should concatenate multiple numbers', function() {
   calculator.numberClick(1);
   calculator.numberClick(2);
   const actual = calculator.runningTotal;
   assert.equal(actual, 12);
 })

 it('should chain multiple operations', function() {
   calculator.runningTotal = 21;
   calculator.operatorClick('-');
   calculator.numberClick(10);
   calculator.operatorClick('=');
   const actual = calculator.runningTotal;
   assert.equal(actual, 11);
 })

 it('should clear the running total without affecting the calculation', function() {
   calculator.runningTotal = 21;
   calculator.clearClick()
   calculator.operatorClick('+');
   calculator.numberClick(10);
   calculator.operatorClick('=');
   const actual = calculator.runningTotal;
   assert.equal(actual, 10);
 })



});
