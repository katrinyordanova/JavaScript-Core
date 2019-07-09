function solve() {
    let text=document.getElementById("string").value;
    let character=document.getElementById("character").value;
    let resultElement=document.getElementById("result");
    let occurrences=0;
    let result="";
    let letters=text.split("");

    function findCharOccurrence(letters,character) {
        for (let i = 0; i < letters.length; i++) {
            if(letters[i]===character){
                occurrences++;
            }
        }
    }

    function oddOrEven() {
        if (occurrences%2===0){
            result="even";
        } else{
            result="odd";
        }
    }

    findCharOccurrence(letters,character);
    oddOrEven();
    resultElement.innerHTML=`Count of ${character} is ${result}.`;
}