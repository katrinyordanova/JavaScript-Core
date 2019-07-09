function solve() {
    let result=document.getElementById("output");
    let buttons=Array.from(document.getElementsByTagName("button"));

    buttons.forEach(button => {
        if (button.textContent==="Chop"){
            button.addEventListener("click",divideNumber);
        } else if (button.textContent==="Dice"){
            button.addEventListener("click",diceNumber);
        } else if (button.textContent==="Spice") {
            button.addEventListener("click", spiceNumber);
        }else if (button.textContent==="Bake") {
            button.addEventListener("click", bakeNumber);
        }else if (button.textContent==="Fillet") {
            button.addEventListener("click", filletNumber);
        }
    });

    function divideNumber() {
        let number=Number(document.querySelector("#exercise input").value);
        if (result.textContent){
            result.textContent/=2;
        } else {
            result.textContent=number/2;
        }
    }

    function diceNumber() {
        let number=Number(document.querySelector("#exercise input").value);
        if (result.textContent){
            result.textContent=Math.sqrt(result.textContent);
        } else {
            result.textContent=Math.sqrt(number);
        }
    }

    function spiceNumber() {
        let number=Number(document.querySelector("#exercise input").value);
        if (result.textContent){
            result.textContent=Number(result.textContent)+1;
        } else {
            result.textContent=Number(number+1);
        }
    }

    function bakeNumber() {
        let number=Number(document.querySelector("#exercise input").value);
        if (result.textContent){
            result.textContent*=3;
        } else {
            result.textContent=number*3;
        }
    }

    function filletNumber() {
        let number=Number(document.querySelector("#exercise input").value);
        if (result.textContent){
            result.textContent*=0.8;
        } else {
            result.textContent=number*0.8;
        }
    }
}
