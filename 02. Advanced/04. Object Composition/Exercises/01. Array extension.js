(function solve() {
    Array.prototype.last=function () {
        return this[this.length-1];
    };

    Array.prototype.skip=function (parameter) {
        return this.slice(parameter);
    };

    Array.prototype.take=function (parameter) {
        return this.slice(0,parameter);
    };

    Array.prototype.sum=function () {
        return this.reduce((a,b) => a+b);
    };

    Array.prototype.average=function () {
        return this.reduce((a,b) => a+b)/this.length;
    }
}());