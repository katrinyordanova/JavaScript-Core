function initializeTable() {
    $("#createLink").click(addInfo);
    
    function addInfo() {
        let country= $("#newCountryText").val();
        let capital= $("#newCapitalText").val();

        if (country.length && capital.length > 0){
            createRow(country,capital);
        }
    }
    
    function createRow(country,capital) {
        let table=$("#countriesTable");
        let row=$("<tr>");
        let parameters=$(`<td>${country}</td><td>${capital}</td></tr>`);
        let actions=$("<td>")
            .append($(`<a href="#">[Up]</a>`).click(moveUp))
            .append($(`<a href="#">[Down]</a>`).click(moveDown))
            .append($(`<a href="#">[Delete]</a>`).click(deleteRow));

        row.append(parameters,actions);
        table.append(row);
        fixMovement();
    }

    function fixMovement(){
        $("a").show();
        $("#countriesTable tr:nth-child(3) td:nth-child(3) a:first-child").hide();
        $("#countriesTable tr:last-child td:nth-child(3) a:nth-child(2)").hide();
    }

    function moveUp(){
        let currentRow=$(this).parent().parent();
        currentRow.insertBefore(currentRow.prev());
        fixMovement();
    }

    function moveDown(){
        let currentRow=$(this).parent().parent();
        currentRow.insertAfter(currentRow.next());
        fixMovement();
    }

    function deleteRow(){
        let currentRow=$(this).parent().parent();
        currentRow.remove();
        fixMovement();
    }

    createRow("Bulgaria", "Sofia");
    createRow("Germany", "Berlin");
    createRow("Russia", "Moscow");
}