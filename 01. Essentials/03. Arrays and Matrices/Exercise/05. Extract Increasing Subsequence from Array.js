function solve(array) {
    let min=0;
    let result=array.reduce((accumulator,element)=>{
        if (element>=min){
            accumulator.push(element);
            min=element;
        }
        return accumulator;
    },[]);
    console.log(result.join("\n"));
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);