function solve(input) {
    let uniqueWords=new Set();

    for (let sentence of input) {
        let words=sentence.toLowerCase().split(/\W+/).filter(x=>x !== "");

        for (let word of words) {
            uniqueWords.add(word);
        }
    }

    console.log(Array.from(uniqueWords.keys()).join(", "));
}
