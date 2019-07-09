function solve() {
  let inputNumber=Number(document.getElementById("num1").value);
  let inputString=document.getElementById("type").toString();
  let result="";
  let convertedTemperature=0;
  let correctType=false;

  function convert(inputNumber,inputString) {
      if (inputString.toLowerCase() === "fahrenheit"){
          convertedTemperature=(((inputNumber-32)*5)/9);
          correctType=true;
      }else if (inputString.toLowerCase() === "celsius") {
          convertedTemperature=(((inputNumber*9)/5)+32);
          correctType=true;
    }
  }

  function printResult(inputNumber,inputString) {
      if (correctType===true){
          result=Math.round(convertedTemperature);
      }else{
          result="Error!";
      }
  }

    convert(inputNumber,inputString);
    printResult(inputNumber,inputString);
    document.getElementById("result").innerHTML=result;
}