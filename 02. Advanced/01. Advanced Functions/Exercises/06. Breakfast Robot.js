function solve() {
    let manager=(function(){
        let ingredients={protein:0 ,carbohydrate:0, fat:0, flavour:0};

        let recipes={
            "apple": {carbohydrate:1, flavour:2},
            "coke": {carbohydrate:10, flavour:20},
            "burger": {carbohydrate:5, flavour:3, fat:7},
            "omelet": {protein:5, flavour:1, fat:1},
            "cheverme": {carbohydrate:10, flavour:10, fat:10, protein:10},
        }

        let prepareFood=(ingredient,recipe)=>{
            let neededIngredients=Object.entries(recipes[ingredient]);
            for (let [ingredient,quantity] of neededIngredients) {
                let storedFood=ingredients[ingredient]*recipe;
                if (quantity>storedFood){
                    return `Error: not enough ${ingredient} in stock`;
                }
            }
            for (let [ingredient,quantity] of neededIngredients) {
                ingredients[ingredient]-=recipe*quantity;
            }
            return "Success";
        }

        return function (input) {
            let tokens=input.split(" ");
            let command=tokens[0];
            
            if (command==="restock") {
                let microElement=tokens[1];
                ingredients[microElement]+=Number(tokens[2]);
                return "Success";
            }else if (command==="prepare") {
                let ingredients=tokens[1];
                let recipe=Number(tokens[2]);
                return prepareFood(ingredients,recipe);
            }if (command==="report") {
                return Object.entries(ingredients).map((x) => `${x[0]}=${x[1]}`).join(" ");
            }
        }
    })();
}

console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));





