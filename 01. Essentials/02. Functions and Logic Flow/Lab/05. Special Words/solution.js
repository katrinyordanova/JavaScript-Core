function solve() {
    let start = Number(document.getElementById('firstNumber').value);
    let end = Number(document.getElementById('secondNumber').value);
    let firstWord = document.getElementById('firstString').value;
    let secondWord = document.getElementById('secondString').value;
    let thirdWord = document.getElementById('thirdString').value;
    let divResult = document.getElementById('result');

    function checkCurrentNumber(i) {
        if (i % 3 === 0 && i % 5 === 0) {
            let p = document.createElement('p');
            p.innerHTML = `${i} ${firstWord}-${secondWord}-${thirdWord}`;
            divResult.appendChild(p);
        } else if (i % 3 === 0) {
            let p = document.createElement('p');
            p.innerHTML = `${i} ${secondWord}`;
            divResult.appendChild(p);
        } else if (i % 5 === 0) {
            let p = document.createElement('p');
            p.innerHTML = `${i} ${thirdWord}`;
            divResult.appendChild(p);
        } else {
            let p = document.createElement('p');
            p.innerHTML = i;
            divResult.appendChild(p);
        }
    }

    for (let i = start; i <= end; i++) {
        checkCurrentNumber(i);
    }
}