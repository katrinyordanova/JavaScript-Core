function solve() {
    let convertBtn = document.getElementsByTagName('button')[0];
    let selectElementTo = document.getElementById('selectMenuTo');
    let optionBinary = document.querySelector('#selectMenuTo option');
    let optionHexadecimal = document.createElement('option');

    optionBinary.textContent = 'Binary';
    optionHexadecimal.textContent = 'hexadecimal';
    selectElementTo.appendChild(optionHexadecimal);

    convertBtn.addEventListener('click', ()=>{
        let inputNum = document.getElementById('input').value;
        inputNum = Number(inputNum);
        if(inputNum < 0){
            inputNum = 0xFFFFFFFF + inputNum + 1;
        }
        if(optionBinary.selected){
            let result =  parseInt(inputNum).toString(2);
            document.getElementById('result').value = result;
        }else{
            let result =  parseInt(inputNum).toString(16);
            document.getElementById('result').value = result.toUpperCase();
        }
    });
}