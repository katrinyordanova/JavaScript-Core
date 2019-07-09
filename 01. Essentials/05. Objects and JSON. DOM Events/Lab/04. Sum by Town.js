function solve(input) {
    let towns={};

    for (let index = 0; index < input.length; index+=2) {
        if (!towns.hasOwnProperty(input[index])){
            towns[input[index]]=0;
        }
        towns[input[index]]+=Number(input[index+1]);
    }

    console.log(JSON.stringify(towns));
}

