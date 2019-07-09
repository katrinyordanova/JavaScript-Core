function solve(input) {
    let result=new Map();

    for (let element of input) {
        let strings=element.split(" | ").filter(x=>x !==" ");
        let town=strings[0];
        let product=strings[1];
        let price=Number(strings[2]);

        if (!result.has(product)) {
            result.set(product,new Map())
        }

        result.get(product).set(town,price);
    }

    for (let [product, map] of result) {
        let lowestPrice=Number.POSITIVE_INFINITY;
        let lowestTown="";
        for (let [town,price] of map) {
            if (price<lowestPrice){
                lowestPrice=price;
                lowestTown=town;
            }
        }
        console.log(`${product} -> ${lowestPrice} (${lowestTown})`);
    }
}

solve(["Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10"
]);