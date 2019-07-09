let assert=require("chai").assert;
let isOddOrEven=require("02. Even Or Odd");

describe('isOddOrEven', function () {
    it('should be undefined ', function () {
        let string=1;
        let result=isOddOrEven(string);
        assert.equal(result,undefined);
    });

    it('should be odd ', function () {
        let string="123";
        let result=isOddOrEven(string);
        assert.equal(result,"odd");
    });

    it('should be even ', function () {
        let string="12";
        let result=isOddOrEven(string);
        assert.equal(result,"even");
    });
});