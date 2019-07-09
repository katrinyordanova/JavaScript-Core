let assert=require("chai").assert;
let sum=require("04" +
    "/04. Sum of Numbers");

describe('sum', function () {
    it('should sum the numbers', function () {
        let arr=[0,5,20,-15];
        let result=sum(arr);
        assert.equal(result,10)
    });

    it('if input is an empty array,return undefined', function () {
        let arr=[];
        let result=sum(arr);
        assert.equal(result,0)
    });

    it('if input is 1,return 1', function () {
        let arr=[1];
        let result=sum(arr);
        assert.equal(result,1)
    });

    it('if input is -1,return -1', function () {
        let arr=[-1];
        let result=sum(arr);
        assert.equal(result,-1)
    });
});


