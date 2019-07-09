describe('isSymmetric', function () {
    it('if input is non-symmetric string,return false', function () {
        let arr="test";
        let result=isSymmetric(arr);
        assert.equal(result,false)
    });

    it('if input is non-symmetric string,return false', function () {
        let arr="tttt";
        let result=isSymmetric(arr);
        assert.equal(result,true)
    });

    it('if array is 1,return false', function () {
        let arr=[1];
        let result=isSymmetric(arr);
        assert.equal(result,true)
    });

    it('if array is 1,return false', function () {
        let arr=[];
        let result=isSymmetric(arr);
        assert.equal(result,true)
    });

    it('if array is -1,return false', function () {
        let arr=[-1];
        let result=isSymmetric(arr);
        assert.equal(result,true)
    });

    it('if array is 0,return false', function () {
        let arr=[0];
        let result=isSymmetric(arr);
        assert.equal(result,true)
    });

    it('if input is a symmetric string,return true', function () {
        let arr=["m"];
        let result=isSymmetric(arr);
        assert.equal(result,true)
    });

    it('if input is symmetric strings,return true', function () {
        let arr=["mql","mql"];
        let result=isSymmetric(arr);
        assert.equal(result,true)
    });

    it('if input is symmetric strings,return true', function () {
        let arr=[1,2,1];
        let result=isSymmetric(arr);
        assert.equal(result,true)
    });
});