function solve(input) {
    input.shift();

    let finalArray=[];
    Array.from(input).forEach((element) => {
        let array=element.split(/\s*\|\s*/).filter(x=>x && x!==", ");
        let object={};

        Array.from(array).forEach((word,index)=>{
            if(+index === 0){
                object.Town = word;
            } else if(+index === 1){
                object.Latitude = +word;
            } else if(+index === 2){
                object.Longitude = +word;
            }
        });
        finalArray.push(object);
    });
    console.log(JSON.stringify(finalArray));
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);