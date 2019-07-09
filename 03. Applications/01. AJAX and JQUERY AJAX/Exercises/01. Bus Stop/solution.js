function getInfo() {
    let stopId=$('#stopId').val();
    let stopName=$('#stopName');
    let buses=$('#buses');

    let url=`https://judgetests.firebaseio.com/businfo/${stopId}` + '.json';

    $.get(url).then((data) => {
        stopName.text(data.name);
        Object.keys(data.buses).forEach((bus) => {
            buses.append('<li>Bus ' + bus + ' arrives in ' + data.buses[bus] + ' minutes</li>');
        });
    }).catch((error) => {
        stopName.html('<li>Error</li>');
    });
}