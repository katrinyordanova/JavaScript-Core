function solve(input) {
    let result=new Map();

    for (const strings of input) {
        let splitInput = strings.split(/\s+->\s+/);
        let town = splitInput[0];
        let product = splitInput[1];
        let income = splitInput[2].split(/\s+:\s+/).map(Number).reduce((a, b) => a * b);

        if (!result.has(town)) {
            result.set(town, new Map());
        }
        if (!result.get(town).has(product)) {
            result.get(town).set(product, 0)
        }
        result.get(town).set(product, result.get(town).get(product) + income);
    }

        for (let [town,product] of result) {
            console.log(`Town - ${town}`);
            for (let [product, income] of result.get(town)) {
                console.log(`$$$${product} : ${income}`);
            }
        }

}


solve(["Sofia -> Laptops HP -> 200 : 2000",
    "Sofia -> Raspberry -> 200000 : 1500",
    "Sofia -> Audi Q7 -> 200 : 100000",
    "Montana -> Portokals -> 200000 : 1",
    "Montana -> Qgodas -> 20000 : 0.2",
    "Montana -> Chereshas -> 1000 : 0.3"]
);