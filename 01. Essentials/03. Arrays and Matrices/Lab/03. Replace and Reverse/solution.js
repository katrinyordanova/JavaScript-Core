function solve() {
  let input=document.getElementById("arr").value;
  let array=JSON.parse(input);
  let resultElement=document.getElementById("result");

      array.forEach((element,index,array) =>
          array[index]=element.split("").reverse().join(""));

      let result=array.map(element => element.charAt(0).toUpperCase()+element.slice(1));

      resultElement.textContent=result.join(" ");
}