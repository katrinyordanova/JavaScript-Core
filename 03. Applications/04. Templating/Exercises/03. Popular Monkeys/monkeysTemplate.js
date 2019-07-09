$(() => {
    renderMonkeys();

    async function renderMonkeys() {
        let templateMonkeys=await $.ajax({
            method:'GET',
            url:'./template.html'
        });
        let compiledTemplate=Handlebars.compile(templateMonkeys);
        let information={
            monkeys
        };

        $('#monkeys').html(compiledTemplate(information));
    }
});

function showMonkeys(id) {
    $(`#${id}`).toggle();
}