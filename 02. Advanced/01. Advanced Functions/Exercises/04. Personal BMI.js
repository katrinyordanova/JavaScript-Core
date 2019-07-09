function solve(name,age,weight,height){
    let calculateBMI=(weight,height) => {
        return Math.round(weight/height**2);
    };

    let bmi=calculateBMI(weight,height/100);

    let status=(bmi) => {
        if (bmi <18.5) {
            return "underweight";
        }else if (bmi <25) {
            return "normal";
        }else if (bmi <30) {
            return "overweight";
        }else  {
            return "obese";
        }
    };

    let charts={
        name,
        personalInfo:{
            age,
            weight,
            height
        },
        BMI: bmi,
        status: status(bmi)
    };

    if (charts.status === "obese") {
        charts.recommendation="admission required";
    }

    return charts;
}

console.log(solve("Honey Boo Boo", 9, 57, 137));