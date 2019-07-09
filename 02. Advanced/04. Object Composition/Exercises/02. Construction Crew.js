function solve(input) {
    if (input.handsShaking === false){
        return input;
    } else{
        let needsAlcohol=(input.weight*input.experience)/10;
        input.bloodAlcoholLevel+=needsAlcohol;
        input.handsShaking=false;
        return input;
    }
}
//
// console.log(solve({ weight: 120,
//     experience: 20,
//     bloodAlcoholLevel: 200,
//     handsShaking: true }
// ));

console.log(solve({ weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false }

));