const assert = require('chai').assert;
const main = require('../main');

//get the results in variables

const helloWorldText = main.helloWorld();
const subtractionResults = main.subtraction(4,2);
const arrayExample = main.arrayOfNumbers();


  // begin a test suite of 1 or more tests
describe('main app', function(){

  describe('Hello world Test Cases', function(){

  // test a functionality
    it('HelloWorld text validation',function(){
      assert.equal(helloWorldText, 'hello world', 'it should be displaying hello world');
    } );

    it('Validation of data type', function(){
      assert.typeOf(helloWorldText, 'string', 'the returning value should be a string.')

    });

  });

  describe('subtraction Method Test Cases', function(){

    it('Subtraction result should be below than 5', function(){
        assert.isBelow(subtractionResults, 5);

    });

    it('Validation of data type', function(){
      assert.typeOf(subtractionResults, 'number')

    });

  });

  describe('Array Test Cases', function(){
    it('Array number include validation', function(){
      assert.include(arrayExample, 5);

    });

    it('Array Length', function(){
      assert.lengthOf(arrayExample, 6);

    });

  });


});