function solve(matrix) {
    let currentSum=0;
    let theSum=0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            currentSum+=matrix[col][row];
        }
        if (theSum===0){
            theSum=currentSum;
            currentSum=0;
        } else{
            if (theSum!==currentSum) {
                console.log("false");
                return;
            }
            theSum=currentSum;
            currentSum=0;
        }
    }
    console.log("true");
}

solve([  [-1, -1, -1],
                [-1, -1, -1],
                [-1, -1, -1]]


);