function solve(array) {
    let result=array.reduce((accumulator,element,index) => {
        if (element === "add") {
            accumulator.push(index+1);
        }else{
            accumulator.pop();
        }
        return accumulator;
    },[]);

    if (result.length<1){
        console.log("Empty");
    } else{
        console.log(result.join("\n"));
    }
}

solve(['remove',
    'remove',
    'remove']


);