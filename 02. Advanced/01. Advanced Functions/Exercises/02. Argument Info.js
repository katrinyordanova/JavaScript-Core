function argumentInfo() {
    let result={};

    Array.from(arguments).forEach((element) => {

        if (typeof element==="undefined"){
            console.log(typeof element + ": undefined");
            if (result[typeof element] === undefined) {
                result[typeof element]=0;
            }
            result[typeof element]++;
        }else {
            console.log(typeof element + ": " + element.toString());

            if (result[typeof element] === undefined){
                result[typeof element]=0;
            }
            result[typeof element]++;
        }
    });

    Object.keys(result).sort((a, b) => result[b] - result[a]).forEach((key) => {
        console.log(key + " = " + result[key]);
    });
}

console.log(argumentInfo({ name: 'bob'}, 3.333, 9.999));