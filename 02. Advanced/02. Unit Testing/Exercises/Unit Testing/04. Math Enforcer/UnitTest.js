// let assert=require('chai').assert;
// let mathEnforcer=require('Math Enforcer').mathEnforcer;

describe('mathEnforcer', function () {

    describe('addFive', function () {
        //don't work
        it('with input being a string,should return undefined', function () {
            let input="test";
            let result=mathEnforcer.addFive(input);
            assert.equal(result,undefined);
        });

        //work
        it('with input a positive number,should return 10', function () {
            let input=5;
            let result=mathEnforcer.addFive(input);
            assert.equal(result,10);
        });

        it('with input being a negative number,should return positive result', function () {
            let input=-1;
            let result=mathEnforcer.addFive(input);
            assert.equal(result,4);
        });

        it('with input a positive number,should return result', function () {
            let input=5.5;
            let result=mathEnforcer.addFive(input);
            assert.equal(result,10.5);
        });
    });

    describe('subtractTen', function () {
        //don'work
        it('with input being a string,should return undefined', function () {
            let input="test";
            let result=mathEnforcer.subtractTen(input);
            assert.equal(result,undefined);
        });

        //work
        it('with input being a positive number,should return positive result', function () {
            let input=25;
            let result=mathEnforcer.subtractTen(input);
            assert.equal(result,15);
        });

        it('with input being a negative number,should return negative result', function () {
            let input=-25;
            let result=mathEnforcer.subtractTen(input);
            assert.equal(result,-35);
        });

        it('with input being a negative number,should return negative result', function () {
            let input=20.50;
            let result=mathEnforcer.subtractTen(input);
            expect(mathEnforcer.subtractTen(20.50)).to.be.closeTo(10.50, 0.1);
        });
    });

    describe('sum', function () {
        //don't work
        it('with firstParameter being a string,should return undefined', function () {
            let firstParameter="123";
            let secondParameter=123;
            let result=mathEnforcer.sum(firstParameter,secondParameter);
            assert.equal(result,undefined);
        });

        it('with secondParameter being a string,should return undefined', function () {
            let firstParameter=123;
            let secondParameter="123";
            let result=mathEnforcer.sum(firstParameter,secondParameter);
            assert.equal(result,undefined);
        });

        //work
        it('with both parameters being positive numbers,should return positive sum', function () {
            let firstParameter=123;
            let secondParameter=100;
            let result=mathEnforcer.sum(firstParameter,secondParameter);
            assert.equal(result,223);
        });

        it('with both parameters being float numbers,should return result', function () {
            let firstParameter=1.1;
            let secondParameter=2.2;
            let result=mathEnforcer.sum(firstParameter,secondParameter);
            assert.equal(result,3.3);
        });

        it('with the second parameter being a float number and the first not,should return result', function () {
            let firstParameter=1;
            let secondParameter=2.2;
            let result=mathEnforcer.sum(firstParameter,secondParameter);
            assert.equal(result,3.2);
        });

        it('with the first parameter being a float number and the second not,should return result', function () {
            let firstParameter=1.1;
            let secondParameter=2;
            let result=mathEnforcer.sum(firstParameter,secondParameter);
            assert.equal(result,3.1);
        });
    });
});