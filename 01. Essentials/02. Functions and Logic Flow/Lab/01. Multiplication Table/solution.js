function solve() {
    let startingNumber=Number(document.getElementById("num1").value);
    let multiplier=Number(document.getElementById("num2").value);
    let result=document.getElementById("result");

    function printResult(startingNumber,multiplier) {
        if (startingNumber<multiplier){
            for (let i = startingNumber; i <= multiplier; i++) {
                let paragraph=document.createElement("p");
                paragraph.innerHTML=`${i} * ${multiplier} = ${i*multiplier}`;
                result.appendChild(paragraph);
            }
        }
    }

    function wrongInput(startingNumber,multiplier){
    if (startingNumber>multiplier) {
            result.innerHTML="Try with other numbers.";
        }
    }

    result.innerText="";
    wrongInput(startingNumber,multiplier);
    printResult(startingNumber,multiplier);
}