function solve() {
    let trucks={};
    let tires=[];

    let addNewTruck=document.getElementsByTagName("button")[0];
    addNewTruck.addEventListener("click",() => {
        let plateNumber=document.getElementById("newTruckPlateNumber").value;
        let tiresCondition=Number(document.getElementById("newTruckTiresCondition").value);
        trucks={
            "plateNumber":plateNumber,
            "tiresCondition":tiresCondition,
            "spareTires":0,
            "travelledDistance":0
        };
        trucks.push(truck);
        console.log("truck");
    });

    let addNewTires=document.getElementsByTagName("button")[1];
    addNewTires.addEventListener("click",() => {
        let newTires=Number(document.getElementById("newTiresCondition").value);
        tires.push(newTires);
        console.log("tire");

    });

    let goToWork=document.getElementsByTagName("button")[2];
    goToWork.addEventListener("click",() => {
        console.log("truck");


    });

    let endShift=document.getElementsByTagName("button")[3];
    endShift.addEventListener("click",() => {
        console.log("shift");
    })
}