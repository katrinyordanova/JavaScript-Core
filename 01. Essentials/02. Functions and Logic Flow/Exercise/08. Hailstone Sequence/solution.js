function getNext() {
    let number=Number(document.getElementById("num").value);
    let resultElement=document.getElementById("result");
    let hailstoneSequence=[number];

    while(number!==1){
        if (number%2===0){
            number/=2;
        } else{
            number=number*3+1;
        }
        hailstoneSequence.push(number)
    }

    resultElement.textContent=hailstoneSequence.join(" ")+" ";
}