function binarySearch() {
    let input=document.getElementById("arr").value;
    let array=input.split(", ");
    let number=document.getElementById("num").value;
    let result=document.getElementById("result");

    if (array.indexOf(number) !== -1) {
        result.innerHTML = `Found ${number} at index ${array.indexOf(number)}`;
    } else {
        result.innerHTML = `${number} is not in the array`;
    }

}