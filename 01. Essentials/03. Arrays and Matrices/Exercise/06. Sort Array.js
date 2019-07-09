function solve(array) {
    let result=array.sort((a,b) => {
        return a.length- b.length || a.localeCompare(b);
    });
    console.log(result.join("\n"));
}

solve(['alpha',
    'beta',
    'gamma']
);