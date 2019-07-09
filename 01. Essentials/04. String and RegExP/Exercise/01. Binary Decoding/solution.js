function solve() {
    let inputElement=document.getElementById("str").value;
    let resultElement=document.getElementById("result");

    let onesSum=findOnesSum(inputElement);
    let removeAtEnd=inputElement.length-onesSum;
    let sliceValues=inputElement.slice(onesSum,removeAtEnd);

    let result=[];

    for (let index = 0; index < sliceValues.length; index+=8) {
        let end=index+8;
        let currentEightElements=sliceValues.slice(index,end);
        let decimalValue=parseInt(currentEightElements,2);
        let resultCharacter=String.fromCharCode(decimalValue);
        let regex=/[A-Za-z\s]/;

        if (regex.test(resultCharacter)) {
            result.push(resultCharacter);
        }
    }

    resultElement.textContent=result.join("");
    inputElement.value="";

    function findOnesSum (inputElement){
        let result=inputElement;
        while (result.length>1) {
            let weight = result.split("")
                .map(Number)
                .filter(x => x > 0)
                .reduce((a, b) => a + b)
                .toString();
            result = weight;
        }
        return result;
    }

}