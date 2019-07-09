function solve(arrayInput) {
    let sum=console.log("Sum = "+arrayInput.reduce((accumulator,currentValue) => accumulator+currentValue));
    let min=console.log("Min = "+arrayInput.map(Number).reduce((accumulator,currentValue) => Math.min(accumulator,currentValue)));
    let max=console.log("Max = "+arrayInput.map(Number).reduce((acc,currVal) => Math.max(acc,currVal)));
    let product= console.log("Product = "+ arrayInput.reduce((acc,currVal) => acc*currVal));
    let join=console.log("Join = "+arrayInput.reduce((acc,currVal) => ""+acc+currVal));
}

solve([2, 3, 10, 5,-9]);