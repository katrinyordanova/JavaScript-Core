function attachEvents() {
const mainUrl='https://baas.kinvey.com/appdata/';
const appKey='kid_Sy63vTnO4/';
const collectionName='biggestCatches';
const username='guest';
const password='guest';
const headers={
    'Authorization': `Basic ${btoa(username + ':' + password)}`,
    'Content-Type': 'application/json'
};

$('.load').on('click', loadData);
$('.add').on('click', addCatch);

    async function loadData() {
    let loadCatches = await $.ajax({
        method:'GET',
        url:mainUrl + appKey + collectionName,
        headers
    });

    $('#catches').empty();

    for (let catchData of loadCatches){
        try {
            let loadCatches = $(`<div class="catch" data-id="${catchData._id}">
            <label>Angler</label>
            <input type="text" class="angler" value="${catchData.angler}"/>
            <label>Weight</label>
            <input type="number" class="weight" value="${Number(catchData.weight)}">
            <label>Species</label>
            <input type="text" class="species" value="${catchData.species}"/>
            <label>Location</label>
            <input type="text" class="location" value="${catchData.location}"/>
            <label>Bait</label>
            <input type="text" class="bait" value="${catchData.bait}"/>
            <label>Capture Time</label>
        <input type="number" class="captureTime" value="${catchData.captureTime}">
            </div>`);

            let updateButton = $('<button class="update">Update</button>');
            updateButton.on('click', updateCatch);
            let deleteButton = $('<button class="delete">Delete</button>');
            deleteButton.on('click', deleteCatch);
            loadCatches.append(updateButton)
                .append(deleteButton);
            loadCatches.appendTo($('#catches'));
        }catch (error) {
            error.log();
        }
    }
}

    async function addCatch() {
        let catchObj={
            angler:$('#addForm input.angler').val(),
            weight:+$('#addForm input.weight').val(),
            species:$('#addForm input.species').val(),
            location:$('#addForm input.location').val(),
            bait:$('#addForm input.bait').val(),
            captureTime:+$('#addForm input.captureTime').val()
        };

        try {
            await $.ajax({
                method:'POST',
                url:mainUrl + appKey + collectionName,
                data:JSON.stringify(catchObj),
                headers
            });

            loadData();

        }catch (error) {
            console.log(error);
        }

    }

    async function updateCatch() {
        //get the id of an element by
        //clicking on a button
        //(all in the same div)
        let updateCatch={
            angler:$(this).parent().find('input.angler').val(),
            weight:+$(this).parent().find('input.weight').val(),
            species:$(this).parent().find('input.species').val(),
            location:$(this).parent().find('input.location').val(),
            bait:$(this).parent().find('input.bait').val(),
            captureTime:+$(this).parent().find('input.captureTime').val()
        };

        let catchId=$(this).parent().data('id');

        try {
            await $.ajax({
                method: 'PUT',
                url: mainUrl + appKey + collectionName + '/' + catchId,
                data: JSON.stringify(updateCatch),
                headers
            });

            loadData();

        }catch (error) {
            console.log(error);
        }
    }

    async function deleteCatch() {
        let deleteCatch={
            angler:$(this).parent().find('input.angler').val(),
            weight:$(this).parent().find('input.weight').val(),
            species:$(this).parent().find('input.species').val(),
            location:$(this).parent().find('input.location').val(),
            bait:$(this).parent().find('input.bait').val(),
            captureTime:$(this).parent().find('input.captureTime').val()
        };

        let catchId=$(this).parent().data('id');

        try {
            await $.ajax({
                method:'DELETE',
                url:mainUrl + appKey + collectionName + '/' + catchId,
                data:JSON.stringify(deleteCatch),
                headers
            });

            loadData();

        }catch (error) {
            console.log(error);
        }
    }
}