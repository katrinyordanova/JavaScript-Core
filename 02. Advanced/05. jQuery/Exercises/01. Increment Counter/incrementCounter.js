function increment(selector) {
    let element=$(selector);
    let counter=0;

    let capsule=$("<textarea class='counter' value='0' disabled></textarea>").appendTo(element);
    let incrementButton=$("<button class='btn' id='incrementBtn'>Increment</button>").appendTo(element);
    let addButton=$("<button class='btn' id='addBtn'>Add</button>").appendTo(element);
    let list=$("<ul class='results'></ul>").appendTo(element);

    incrementButton.on("click", () => {
        counter++;
        capsule.attr("value",counter.toString());
        capsule.val(counter);
    });

    addButton.on("click",() => {
        $(`<li>${capsule.attr("value").toString()}</li>`).appendTo($(".results"));
    })
}
