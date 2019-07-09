function solve(components) {
    let car={};
    car.model=components.model;
    if (components.power<=90) {
        car.engine={
            power:90,
            volume: 1800
        }
    }else if (components.power>90 && components.power<=120) {
        car.engine={
            power:120,
            volume: 2400
        }
    }else {
        car.engine={
            power:200,
            volume: 3500
        }
    }

    if (components.carriage === "hatchback"){
        car.carriage={
            type: "hatchback",
            color: components.color
        }
    }else {
        car.carriage={
            type: "coupe",
            color: components.color
        }
    }

    if (Number(components.wheelsize) % 2 === 0) {
        let wheels=components.wheelsize-1;
        car.wheels=[wheels, wheels, wheels, wheels];

    }else {
        let wheels=components.wheelsize;
        car.wheels=[wheels, wheels, wheels, wheels];
    }

    return car;
}

// console.log(solve({ model: 'Opel Vectra',
//     power: 110,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17 }
//
// ));