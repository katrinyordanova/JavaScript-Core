function addSticker() {
    let title=$('.title');
    let text=$('.content');
    let stickerElement=$('#sticker-list');

    if (title.val().length !== 0&& text.val().length !== 0) {
        let li = $('<li>', {
            class: 'note-content'
        });
        let deleteButton = $('<a>', {
            text: 'x',
            class: 'button',
            click: function () {
                li.remove();
            }
        });
        deleteButton.appendTo(li);
        let h2 = $('<h2>', {
            text: `${title.val()}`
        });
        h2.appendTo(li);
        let hr = $('<hr>');
        hr.appendTo(li);
        let p = $('<p>', {
            text: `${text.val()}`
        });
        p.appendTo(li);
        li.appendTo(stickerElement);

        $('.title').val('');
        $('.content').val('');
    }
}