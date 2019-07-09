function solve() {
  let input=document.getElementById("arr").value;
  let array=JSON.parse(input);
  let resultElement=document.getElementById("result");
  let sortAscending=[];
  let sortAlphabetically=[];

  function orderArray() {
      let firstDiv=document.createElement("div");
      let secondDiv=document.createElement("div");
      sortAscending=array.sort((a,b)=>a-b);
      firstDiv.textContent=sortAscending.join(", ");
      resultElement.appendChild(firstDiv);
      sortAlphabetically=array.sort((a,b)=>a.localeCompare(b));
      secondDiv.textContent=sortAlphabetically.join(", ");
      resultElement.appendChild(secondDiv);
  }

  orderArray(input);
}