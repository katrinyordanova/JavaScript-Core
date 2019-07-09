function solve() {
  let array=JSON.parse(document.getElementById("arr").value);
  let resultElement=document.getElementById("result");

  let regex=/^([A-Z][a-z]* [A-Z][a-z]*) (\+359 [0-9]{1} [0-9]{3} [0-9]{3}|\+359-[0-9]{1}-[0-9]{3}-[0-9]{3}) ([a-z0-9]+@[a-z]+.[a-z]{2,3})$/;
  let macth;

    for (let element of array) {
        macth=regex.exec(element);

        if (!macth) {
            let paragraph=document.createElement("p");
            paragraph.textContent="Invalid data";
            resultElement.appendChild(paragraph);
        }else{
            let firstParagraph=document.createElement("p");
            firstParagraph.textContent="Name: " + macth[1];
            resultElement.appendChild(firstParagraph);
            let secondParagraph=document.createElement("p");
            secondParagraph.textContent="Phone Number: " + macth[2];
            resultElement.appendChild(secondParagraph);
            let thirdParagraph=document.createElement("p");
            thirdParagraph.textContent="Email: " + macth[3];
            resultElement.appendChild(thirdParagraph);
        }
        let dashes=document.createElement("p");
        dashes.textContent="- - -";
        resultElement.appendChild(dashes);
    }
}
