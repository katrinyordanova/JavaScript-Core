class BookCollection {
    constructor(shelfGenre, room, shelfCapacity){
        this.shelfGenre=shelfGenre;
        this.room=room;
        this.shelfCapacity=shelfCapacity;
        this.shelf=[];

        return this;
    }

    get room(){
       return this._room;
    }

    set room(value){
        switch (value) {
            case 'closet':
            case 'bedRoom':
            case 'livingRoom':
                this._room=value;
                 break;
            default: throw `Cannot have book shelf in ${value}`;
        }
    }

    get shelfCondition(){
        return this.shelfCapacity - this.shelf.length;
    }

    addBook(bookName, bookAuthor, genre){
        let book={bookName,bookAuthor,genre};

        if (this.shelfCondition<=0){
            this.shelf.shift();
        }

        this.shelf.push(book);
        this.shelf.sort((a,b) => a.bookAuthor.localeCompare(b.bookAuthor));

        return this;
    }

    throwAwayBook(bookName){
        this.shelf = this.shelf.filter(b => b.bookName !== bookName);

        return this;
    }

    showBooks(genre){
        let result=`Results for search "${genre}":\n`;
        result+=this.shelf
            .filter(book => book.genre === genre)
            .map(book => `\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"`)
            .join('\n');
        return result.trim();
    }

    toString(){
        if (this.shelf.length<=0){
            return "It's an empty shelf";
        }else{
            let result=`"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
            result+=this.shelf.map(book =>`\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}`)
                .join('\n');

            return result.trim();
        }
    }
}





