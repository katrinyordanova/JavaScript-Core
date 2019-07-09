function solve() {
    let input = JSON.parse(document.getElementById("arr").value);
    let text=input.filter(x=>x !== " ");
    let replacingWord = document.getElementById("str").value;
    let resultElement = document.getElementById("result");

    let redundantWord=text[0].split(" ")[2];

    for (let index = 0; index < text.length; index++) {
        let regex=new RegExp(redundantWord,"gi");
        let match=text[index].replace(regex,replacingWord);
        let paragraph=document.createElement("p");
        paragraph.textContent=match;
        resultElement.appendChild(paragraph);
    }
}
