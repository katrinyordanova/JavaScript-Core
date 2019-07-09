function doStuff(array) {
    let words= (function () {
        let result="";
        return {
            append: (r) => result+=r,
            removeStart: (r) => result=result.substring(r),
            removeEnd: (r) => result=result.substring(0,result.length-r),
            print: () => console.log(result)
        }
    })();
    for (let arrayElement of array) {
        let [comm,value]=arrayElement.split(" ");
        words[comm](value);
    }
}


doStuff(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
);

