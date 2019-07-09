let result=(function () {

    let Suits={
        SPADES: "\u2660",
        HEARTS: "\u2665",
        CLUBS: "\u2663",
        DIAMONDS :"\u2666"
    };

    let validFaces=["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card{
        constructor(face,suit){
            this.face=face;
            this.suit=suit;
        }

        get face(){
            return this._face;
        }

        set face(face){
            if (!validFaces.includes(face)) {
                throw new Error("Invalid card suit: " + face);
            }
            this._face=face;
        }

        get suit(){
            return this._suit;
        }

        set suit(suit){
            if(!Object.values(Suits).map(k =>k ===suit)){
                throw new Error("Invalid card suit: " + suit);
            }else{
                this._suit=suit;
            }
        }

        toString(){
            return `${this.face}${this.suit}`
        }
    }

    return{
        Suits:Suits,
        Card:Card
    }
}());

let Card=result.Card;
let Suits=result.Suits;

let card=new Card("Q",Suits.CLUBS);
card.face="A";
card.suit=Suits.DIAMONDS;
//let card2=new Card("1",Suits.DIAMONDS);