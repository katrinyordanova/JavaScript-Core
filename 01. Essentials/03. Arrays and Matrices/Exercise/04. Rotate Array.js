function solve(array) {
    let rotations=Number(array.pop());

    for (let index = 0; index < rotations % array.length; index++) {
        array.unshift(array.pop());
    }
    console.log(array.join(" "));
}

solve(['1',
    '2',
    '3',
    '4',
    '2']
);