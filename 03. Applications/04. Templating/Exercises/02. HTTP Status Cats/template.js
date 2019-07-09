$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
       let catsTemplate=await $.ajax({
           method:'GET',
           url:'./catsTemplate.html'
       });

       let compiledTemplate=Handlebars.compile(catsTemplate);
       let information={
           cats:window.cats
       };

       $('#allCats').html(compiledTemplate(information));
    }
});

function showInfo(id) {
    $(`#${id}`).toggle();
}
