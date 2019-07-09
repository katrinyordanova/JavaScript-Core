function search() {
    let searchText=$("#searchText").val();
    let matches=$(`#towns li:contains("${searchText}")`);
    matches.css("font-weight", "bold");
    $("#result").text(matches.length + " matches found");
}