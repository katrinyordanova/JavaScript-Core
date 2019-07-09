// function attachEvents() {
//     let submit=$('#submit');
//     let refresh=$('#refresh');
//     let textArea=$('#messages');
//
//     refresh.on('click',function () {
//         textArea.text('');
//         getInfo();
//     });
//
//     function getInfo() {
//         let url=`https://testapp-24db8.firebaseio.com/messenger.json`;
//
//         $.get(url,function (key) {
//             Object.keys(key).forEach((message) => {
//                 let messages=key[message];
//                 let author=messages.author;
//                 let content=messages.content;
//
//                 let currentMessage=textArea.text();
//                 currentMessage+=`${author}: ${content}\n`;
//                 textArea.text(currentMessage);
//             });
//         })
//     }
//
//     submit.on('click',function () {
//        let author=$('#author').val();
//        let content=$('#content').val();
//        let timeStamp=Date.now();
//
//        let messageObject={
//          author:author,
//          content:content,
//          timestamp:timeStamp
//        };
//
//         let url=`https://testapp-24db8.firebaseio.com/messenger.json`;
//
//         $.ajax({
//             method:'POST',
//             url:url,
//             data: JSON.stringify(messageObject),
//             success:() => console.log('success!')
//         });
//
//         $('#author').val('');
//          $('#content').val('');
//     });
// }

function attachEvents() {
    const baseUrl='https://baas.kinvey.com/';
    const appKey='kid_HJ3HBEt_N/';
    const appData='messenger';
    const authenticationToken='e47a7749-704f-4499-9606-25769a063b46.pHTQwsZDxfdLHgClsxVyh19+kyS/bDbDQnBgoyuNWEA=';
    const authenticationHeader={
        "Authorization":`Kinvey ${authenticationToken}`,
        "Content-Type": "application/json"
    };

    let submit=$('#submit');
    let refresh=$('#refresh');
    let textArea=$('#messages');

    refresh.on('click',function () {
        textArea.text('');
        getInfo();
    });

    function getInfo() {
        let url=baseUrl+'appdata/' + appKey + appData;
        console.log(url);
        $.get(url,function (key) {
            Object.keys(key).forEach((message) => {
                let messages=key[message];
                let author=messages.author;
                let content=messages.content;

                let currentMessage=textArea.text();
                currentMessage+=`${author}: ${content}\n`;
                textArea.text(currentMessage);
            });
        })
    }

    submit.on('click',function () {
        let author=$('#author').val();
        let content=$('#content').val();
        let timeStamp=Date.now();

        let messageObject={
            author:author,
            content:content,
            timestamp:timeStamp
        };

        let url=baseUrl+'appdata/' + appKey + appData;

        $.ajax({
            method:'POST',
            url:url,
            data: JSON.stringify(messageObject),
            headers:authenticationHeader,
            success:() => console.log('success!')
        });

        $('#author').val('');
        $('#content').val('');
    });
}