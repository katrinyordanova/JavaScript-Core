function solve() {
  let object=document.getElementById("arr").value;
  let array=JSON.parse(object);
  let resultElement=document.getElementById("result");
  let resultArray=[];

  for (let index = 0; index < array.length; index++) {
    let value=array[index]*array.length;
    resultArray.push(`${index} -> ${value}`);
  }

  for (let index = 0; index < resultArray.length; index++) {
    let paragraph=document.createElement("p");
    paragraph.textContent=resultArray[index];
    resultElement.appendChild(paragraph);
  }
}