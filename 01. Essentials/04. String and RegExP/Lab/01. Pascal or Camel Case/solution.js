function solve() {
    let firstString=document.getElementById("str1").value;
    let secondString=document.getElementById("str2").value;
    let resultElement=document.getElementById("result");

        let result=firstString.toLowerCase()
            .split(" ")
            .filter(x=>x)
            .map(x=>x.charAt(0).toUpperCase()+ x.slice(1))
            .join("");

        if (secondString === "Camel Case") {
            result=result.charAt(0).toLowerCase()+result.slice(1);
        } else if (secondString !=="Camel Case" && secondString!=="Pascal Case") {
            result = "Error!";
        }
        resultElement.innerHTML = result;
}