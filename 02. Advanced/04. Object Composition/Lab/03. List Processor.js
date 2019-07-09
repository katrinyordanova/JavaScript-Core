function solve(input) {
    let array=[];

    Array.from(input).forEach((token)=>{
        let splitTokens=token.split(" ");
        let command=splitTokens[0];
        let parameter=splitTokens[1];

        doSomething(command,parameter)
    });

    function doSomething(command,parameter) {
        if (command==="add"){
            array.push(parameter);
        }
        if (command==="remove"){
            array=Array.from(array).map((element) => {
                 if (element === parameter){
                     return undefined;
                 } return element;
             }).filter(x=>x);
        }
        if (command==="print"){
             console.log(array.join(","));
        }
    }
}

console.log(solve(['add hello', 'add again', 'add hello', 'remove hello', 'add again', 'print']));