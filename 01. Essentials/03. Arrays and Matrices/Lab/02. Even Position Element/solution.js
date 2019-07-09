function solve() {
  let input=document.getElementById("arr").value;
  let array=JSON.parse(input);
  let resultElement=document.getElementById("result");
  let resultArray=[];

  function calculateResult() {
      for (let index = 0; index < array.length; index++) {
          let value=array[index];
          if (index%2===0){
              resultArray.push(value)
          }
      }
  }
    calculateResult(array);
  resultElement.textContent=resultArray.join(" x ");
}
