// let assert=require("chai").assert;
// let lookupChar=require("Char Lookup");

describe('lookupChar', function () {
    //tried [],""
    //undefined
    it('with first parameter being a number,should return undefined', function () {
        let string=Number(123);
        let index=0;
        let result=lookupChar(string,index);
        assert.equal(result,undefined);
    });

    it('with first parameter being a string (length 3) but index an array,should return undefined', function () {
        let string="test";
        let index=1.2;
        let result=lookupChar(string,index);
        assert.equal(result,undefined);
    });

    it('with index being a string,should return undefined', function () {
        let string="123";
        let index="123";
        let result=lookupChar(string,index);
        assert.equal(result,undefined);
    });

    it('with index being a negative number,should return Incorrect index', function () {
        let string="123";
        let index=-1;
        let result=lookupChar(string,index);
        assert.equal(result,"Incorrect index");
    });

    it('with index being a negative number and the length of string being 1,should return Incorrect index', function () {
        let string="";
        let index=-1;
        let result=lookupChar(string,index);
        assert.equal(result,"Incorrect index");
    });

    it('with index being a negative number and the length of string being 1,should return Incorrect index', function () {
        let string="test";
        let index=5;
        let result=lookupChar(string,index);
        assert.equal(result,"Incorrect index");
    });

    //defined
    it('with first parameter being a string and second - number,should return e', function () {
        let string="test";
        let index=1;
        let result=lookupChar(string,index);
        assert.equal(result,"e");
    });

    it('with first parameter being a string and second - number,should return e', function () {
        let string="test";
        let index=Number.isInteger(2);
        let result=lookupChar(string,index);
        assert.equal(result,"s");
    });
});