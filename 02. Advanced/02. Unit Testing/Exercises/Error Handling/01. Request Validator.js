function solve(array,startIndex,endIndex) {

        if (!Array.isArray(array)) {
            return NaN;
        }if (startIndex<0) {
            startIndex=0;
        }if (endIndex>=array.length) {
            endIndex=array.length-1;
        }if (array.length<1){
            return 0;
        }

        let result=array.slice(startIndex,endIndex+1).map(Number).reduce((a,b)=> a+b);
        return result;
}

console.log(solve("text", 0, 2));