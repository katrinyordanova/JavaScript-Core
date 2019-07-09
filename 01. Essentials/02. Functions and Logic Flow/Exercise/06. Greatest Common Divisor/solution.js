function greatestCD() {
    let firstNumber=document.getElementById("num1").value;
    let secondNumber=document.getElementById("num2").value;
    let result=document.getElementById("result");

    result.innerHTML = gcd(firstNumber, secondNumber);

    function gcd(a, b) {
        if (!b) {
            return a;
        }
        return gcd(b, a % b);
    }
}