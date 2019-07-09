function solve() {
	//get input+
	//convert to number+
	//check if the numbers are exactly 6+
	//make sure that all of the numbers aren't+
	//less than 1 and more than 49+
	//secure yourself from empty input+
	//make those bitchez appear+
	//color the ones from the input+
	//disable any further number entering+

    let result=document.getElementById("allNumbers");
    let button=document.getElementsByTagName("button")[0];
    button.addEventListener('click',event);

    function event() {
        let counter=0;
        let numbers = document.getElementsByTagName('input')[0].value;
        numbers = numbers.split(' ');
        numbers.forEach(element => {
            counter++;
            if (element > 49 || element < 1) {
                return;
            }
        });
        if (counter!==6){
            return;
        }

        for (let i=1;i<=49;i++){
            let number=document.createElement('div');
            number.textContent=i;
            number.setAttribute('class','numbers');

            numbers.forEach(elements => {
                if (elements === number.textContent){
                    number.style.backgroundColor='orange';
                }
            });
            result.appendChild(number);
        }
        document.getElementsByTagName("input")[0].setAttribute('disabled','true');
        document.getElementsByTagName("button")[0].setAttribute('disabled','true');
    }
}