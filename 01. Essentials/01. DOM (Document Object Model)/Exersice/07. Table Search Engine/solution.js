function solve() {
    let button=document.getElementById("searchBtn");
    button.addEventListener('click',findMatches);

    function findMatches() {
        let input=document.getElementById("searchField").value;
        let information=Array.from(document.querySelectorAll("tbody tr"));

        for (let info of information) {
            if (info.textContent.toLowerCase().includes(input)){
                info.setAttribute("class","select");            }
        }
        document.getElementById("searchFiled").value="";
    }
}