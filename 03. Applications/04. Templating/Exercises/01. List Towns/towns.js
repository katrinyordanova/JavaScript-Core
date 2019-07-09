function attachEvents() {
    $('#btnLoadTowns').on('click', getTowns);

    function getTowns(){
        let inputTowns=$('#towns').val().split(', ');
        let template=$('#towns-template').html();
        let compileTemplate=Handlebars.compile(template);
        let context={
            inputTowns
        };

        $('#root').html(compileTemplate(context));
    }
}