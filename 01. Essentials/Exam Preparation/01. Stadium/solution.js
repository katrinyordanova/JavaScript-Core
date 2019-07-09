function solve() {
    let profit=0;
    let fans=0;

    let textarea=document.getElementsByTagName("textarea")[0];
    let buttons=Array.from(document.querySelectorAll("button.seat"));
    buttons.forEach(x=>x.addEventListener("click",(b) => {
        let button=b.target;
        let indexOfButton=buttons.indexOf(button);
        let parent=button.parentElement.parentElement.parentElement.parentElement.parentElement.className;

        let sector= () => {
            if (indexOfButton%3 ===0){
                return "A";
            } else if (indexOfButton%3 ===1){
                return "B";
            }else {
                return "C";
            }
        };

        if (button.getAttribute("available") !== "none") {
            button.style.backgroundColor = 'rgb(255, 0, 0)';
            button.setAttribute('available', 'none');
            if (parent === 'Levski' || parent === 'Litex') {
                if (sector() === 'A') {
                    profit += 10;
                } else if (sector() === 'B') {
                    profit += 7;
                } else {
                    profit += 5;
                }
            } else {
                if (sector() === 'A') {
                    profit += 25;
                } else if (sector() === 'B') {
                    profit += 15;
                } else {
                    profit += 10;
                }
            }
            fans++;
            textarea.textContent += ` Seat ${button.textContent} in zone ${parent} sector ${sector()} was taken.\n`;
        } else {
            textarea.textContent += ` Seat ${button.textContent} in zone ${parent} sector ${sector()} is unavailable.\n`;
        }

    }));

    document.getElementById("summary")
        .addEventListener("click",  () => {
            let sumButton=document.querySelector("#summary>span");
            sumButton.textContent=`${profit} leva, ${fans} fans.`;
        });
}