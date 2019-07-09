function addDestination() {
    let city=$('.inputData')[0].value;
    let country=$('.inputData')[1].value;
    let seasons=$('#seasons option:selected').text();

    if (city!=='' && country!==''){
        let table=$('#destinations');
        let tr=$('<tr>')
            .append($('<td>').text(`${city}, ${country}`))
            .append($('<td>').text(`${seasons}`)
            );
           tr.appendTo(table);

        $('.inputData')[0].value='';
        $('.inputData')[1].value='';

        let summerCounter=Number($('#summer').val());
        let autumnCounter=Number($('#autumn').val());
        let winterCounter=Number($('#winter').val());
        let springCounter=Number($('#spring').val());
        
        switch (seasons) {
            case 'Summer':
                summerCounter++;
                $('#summer').val(summerCounter);
                break;
            case 'Autumn':
                autumnCounter++;
                $('#autumn').val(autumnCounter);
            break;
            case 'Winter':
                winterCounter++;
                $('#winter').val(winterCounter);
                break;
            case 'Spring':
                springCounter++;
                $('#spring').val(springCounter);
                break;
        }
    }
}