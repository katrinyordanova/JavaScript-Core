function solve() {
    let outputTextArea=document.getElementById("output");

    let extractButton=document.getElementsByTagName("button")[0];
    extractButton.addEventListener("click",() => {
        let inputTextArea=document.getElementById("input").value;
        let findStartingNumbers=inputTextArea.match(/[0-9]+/);
        let number=Number(findStartingNumbers);
        inputTextArea=inputTextArea.replace(number,"");
        let text=inputTextArea.substring(0,number);
        let lastCharacter=text.slice(-1);
        let splitString=text.split(lastCharacter);
        let removeLastElement=splitString.filter(x=>x !== "");
        let pattern=`[${splitString[0]}]+`;
        let regex=new RegExp(pattern,"g");
        let newString=removeLastElement[1];
        let removeHashtags=newString.replace(/#/g," ");

        outputTextArea.textContent=removeHashtags.split(regex).join("").toString();
    });
}