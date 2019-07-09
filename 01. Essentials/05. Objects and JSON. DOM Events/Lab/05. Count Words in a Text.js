function solve([input]) {
    let words=input.split(/\W+/).filter(x=>x !== "");
    let result={};

    for (let word of words) {
        if (!result.hasOwnProperty(word)) {
            result[word]=1;
        }else{
            result[word]++;
        }
    }

    console.log(JSON.stringify(result));
}

solve(["JS devs use Node.js for server-side JS.-- JS for devs"]);