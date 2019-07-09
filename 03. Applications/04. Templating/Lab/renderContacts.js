$(() => {
    renderInformation();

    async function renderInformation() {
        let getTemplates=await $.ajax({
            method:'GET',
            url:'./template.html'
        });

        let compiledTemplate=Handlebars.compile(getTemplates);
        let information={
            contacts
        };

        $('.contacts').html(compiledTemplate(information));
    }
});

function showDetails(id) {
    $(`#${id}`).toggle();
}