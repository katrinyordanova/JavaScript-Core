let Calculator=require('./calculator');
let assert=require('chai').assert;

describe('Calculator', function () {
    let calculator;

    beforeEach(function () {
        calculator=new Calculator();
    });

    it('should contain a property expenses that is initialized to an empty array.', function () {
        assert.isArray(calculator.expenses);
        assert.isEmpty(calculator.expenses);
    });

    describe('should add the passed in item (of any type) to the expenses.', function () {
        it('should add a primitive type', function () {
            calculator.add(5);
            calculator.add(-5);
            calculator.add(5.5);
            calculator.add('Pesho');
            calculator.add('');
            calculator.add([]);
            calculator.add([9]);
            calculator.add({});
            calculator.add({key:'value'});
            calculator.add(true);
            calculator.add(false);

            assert.deepEqual(calculator.expenses,[5,-5,5.5,'Pesho','',[],[9],{},{key:'value'},true,false]);
        });
    });

    describe('should divide numbers', function () {
        it('should correctly divide integer numbers in the array', function () {
            calculator.add(50);
            calculator.add(10);

            assert.equal(calculator.divideNums(),5);
        });

        it('should correctly divide float numbers in the array', function () {
            calculator.add(5.5);
            calculator.add(10);

            assert.equal(calculator.divideNums(),0.55);
        });

        it('should correctly divide float numbers in the array', function () {
            calculator.add(5.5);
            calculator.add(5,5);

            assert.equal(calculator.divideNums(),1.1);
        });

        it('should correctly divide negative float numbers in the array', function () {
            calculator.add(-5.5);
            calculator.add(-5,5);

            assert.equal(calculator.divideNums(),1.1);
        });

        it('should throw error in case of empty array', function () {
            assert.throw(()=>calculator.divideNums(),'There are no numbers in the array!');
        });

        it('if input is not a number should return  ', function () {
            calculator.add('Pesho');
            calculator.add([]);
            calculator.add([2]);
            calculator.add({});
            calculator.add({key:'value'});

            assert.throw(() => calculator.divideNums(), 'There are no numbers in the array!');
        });

        it('should trow error when trying to divide by zero', function () {
            calculator.add(10);
            calculator.add(0);

            assert.equal(calculator.divideNums(), 'Cannot divide by zero');
        });
    });

    describe('test toString() function', function () {
        it('should return a correct result separated by " -> "', function () {
            calculator.add(5);
            calculator.add(3.5);
            calculator.add(-5);
            calculator.add('Pesho');

            assert.equal(calculator.toString(), '5 -> 3.5 -> -5 -> Pesho');
        });

        it('should return a correct result separated by " -> "', function () {
            calculator.add('Gosho');

            assert.equal(calculator.toString(), 'Gosho');
        });

        it('with empty array as input,should return "empty array"', function () {
            assert.equal(calculator.toString(), 'empty array' );
        });
    });

    describe('test orderBy() function', function () {
        it('with empty array as input,should return "empty array"', function () {
            assert.equal(calculator.orderBy(), 'empty');
        });

        it('is isNumber is false,should return array of strings sorted in ascending order and joined by ", "', function () {
            calculator.add('Pesho');
            calculator.add('Gosho');
            calculator.add('Stamat');

            assert.equal(calculator.orderBy(), 'Gosho, Pesho, Stamat');
        });

        it('is isNumber is true,should return array of integer numbers sorted in ascending order' +
            'and joined by ", "', function () {
            calculator.add(3);
            calculator.add(1);
            calculator.add(2);

            assert.equal(calculator.orderBy(), '1, 2, 3');
        });

        it('is isNumber is true,should return array of float numbers sorted in ascending order and joined by ", "', function () {
            calculator.add(3.3);
            calculator.add(1.5);
            calculator.add(2.8);

            assert.equal(calculator.orderBy(), '1.5, 2.8, 3.3');
        });

        it('is isNumber is true,should return array of numbers sorted in ascending order and joined by ", "', function () {
            calculator.add(3);
            calculator.add(-1);
            calculator.add(2);

            assert.equal(calculator.orderBy(), '-1, 2, 3');
        });
    });
});