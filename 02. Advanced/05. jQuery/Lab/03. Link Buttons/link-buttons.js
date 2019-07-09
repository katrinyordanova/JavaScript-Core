function attachEvents() {
    $("a.button").bind("click", function (button) {
        let currentButton=$(button.target);
        $("a.button").removeClass("selected");
        currentButton.addClass("selected");
    })
}