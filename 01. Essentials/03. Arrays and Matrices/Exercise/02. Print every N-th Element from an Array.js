// function solve(array){
//     let lastElement=Number(array.pop());
//
//     for (let index = 0; index < array.length; index+=lastElement) {
//         console.log(array[index]);
//     }
// }

function solve(array) {
    let lastElement=array.pop();
    let result=array.return((accumulator,element,index)=> {
        if (index % lastElement ===0){
            accumulator.push(element);
        }
        return accumulator;
    },[]);
    console.log(result.join("\n"));
}
solve(['1',
    '2',
    '3',
    '4',
    '5',
    '6']


);