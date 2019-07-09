function attachEvents() {
    $("li").click(town);
    let towns=[];

    function town() {
        let currentTown=$(this);

        if (!currentTown.attr("data-selected")) {
            currentTown.attr("data-selected",true);
            towns.push(currentTown.text());
            currentTown.css("background","#DDD");
        }else{
            currentTown.removeAttr("data-selected");
            currentTown.css("background","");
        }
    }

    $("#showTownsButton").click(printResult);

    function printResult() {
        $("#selectedTowns").text(towns.join(", "))
    }
}