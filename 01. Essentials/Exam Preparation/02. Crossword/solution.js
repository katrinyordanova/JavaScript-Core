function solve() {
    let resultElement=document.getElementById("output").children[0];

   let filterEvent=document.querySelector("#filter > button");
   filterEvent.addEventListener("click",() => {
       let input=document.getElementById("input").value;
       let position=Number(document.getElementById("filterPosition").value);
       let command=document.getElementById("filterSecondaryCmd").value;
       let filterHow="";

       switch (command) {
           case "uppercase":
               filterHow = input.split("").filter(x => isNaN(x) && x === x.toUpperCase())[position - 1];
               break;
           case "lowercase":
               filterHow = input.split("").filter(x => isNaN(x) && x === x.toLowerCase())[position - 1];
               break;
           case "nums":
               filterHow = input.split("").filter(x => !isNaN(x))[position - 1];
               break;
       }
       resultElement.textContent+=filterHow;
       console.log(resultElement);
   });

   let sortEvent=document.querySelector("#sort > button");
   sortEvent.addEventListener("click",() => {
       let input=document.getElementById("input").value;
       let command=document.getElementById("sortSecondaryCmd").value;
       let position=Number(document.getElementById("sortPosition").value);

       let sort="";
       switch (command) {
           case "A":
               sort=input.split("").sort()[position-1];
               break;
           case "Z" :
               sort=input.split("").sort((a,b)=>b.localeCompare(a))[position-1];
               break;
       }
       resultElement.textContent+=sort;
   });

   let rotateEvent=document.querySelector("#rotate > button");
   rotateEvent.addEventListener("click",() => {
       let input=document.getElementById("input").value;let times = Number(document.getElementById('rotateSecondaryCmd').value);
       let rotatePosition = Number(document.getElementById('rotatePosition').value);
       let array = input.split('');

       let rotatedArray = rotateArray(array, times);

       resultElement.innerHTML += rotatedArray[rotatePosition - 1];

   });

    function rotateArray(arr, count) {
        let length = arr.length;
        while (count--) {
            arr.unshift(arr.pop());
        }

        return arr;
    }
   let getEvent=document.querySelector("#get > button");
   getEvent.addEventListener("click",() => {
       let input=document.getElementById("input").value;
       let position=Number(document.getElementById("getPosition").value);
        resultElement.textContent+=input.split("")[position-1];
   });

}