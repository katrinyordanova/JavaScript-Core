function solve(stringus) {
    let input = document.getElementById("str").value;
    let string=input.split(" ");
    let resultElement = document.getElementById("result");
    let words=[];
    let numbers=[];

    function getResult(string) {
        for (let element of string) {
           if (isNaN(element)){
               words=element.split("").map(ch => ch.charCodeAt(0)).join(" ");
               let paragraph=document.createElement("p");
               paragraph.textContent=words;
               resultElement.appendChild(paragraph);
           }else {
               numbers.push(element);
           }
        }
        let lastWord=String.fromCharCode(...numbers);
        let paragraph=document.createElement("p");
        paragraph.textContent=lastWord;
        resultElement.appendChild(paragraph);
    }

    getResult(string)
}

solve("Test 83 Testov 111 Pesho Gosho 102 116 85 Qwerty 110 105");