function solve() {
    document.getElementsByTagName("button")[0].addEventListener("click",() => {
        event.preventDefault();

    let user={
        username:document.getElementsByTagName("input")[0].value,
        email:document.getElementsByTagName("input")[2].value,
        topics:Array.from(document.getElementsByClassName("topics")[0].children)
            .filter(x=>x.checked).map(x=>x.value)
    };

    let tableRows=document.createElement("tr");
    let tableDataUsername=document.createElement("td");
    tableDataUsername.innerHTML=user.username;
    tableRows.appendChild(tableDataUsername);
    let tableDataEmail=document.createElement("td");
    tableDataEmail.innerHTML=user.email;
    tableRows.appendChild(tableDataEmail);
    let tableDataTopics=document.createElement("td");
    tableDataTopics.innerHTML=user.topics.join(", ");
    tableRows.appendChild(tableDataTopics);

    document.getElementsByTagName("tbody")[0].appendChild(tableRows);
    });

    document.getElementsByTagName("button")[1].addEventListener("click",() => {
        let wordToSearch=document.getElementsByTagName("input")[7].value;
        let tableDatas=Array.from(document.querySelectorAll("table tbody tr td"));

        for (let tableData of tableDatas) {
          tableData.parentNode.style.visibility="hidden";
        }

        for (let tableData of tableDatas) {
            if (tableData.textContent.includes(wordToSearch)) {
                tableData.parentNode.style.visibility = "visible";
            }
        }
    })
}