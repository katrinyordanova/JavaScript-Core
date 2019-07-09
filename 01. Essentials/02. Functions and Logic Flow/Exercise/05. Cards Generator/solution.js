function solve() {
    let button=document.querySelector("#exercise button");
    button.addEventListener("click",showCards);

    function showCards() {
        let fromElement=document.getElementById("from").value;
        let toElement=document.getElementById("to").value;
        let suitElement=document.querySelector("#exercise select").selectedIndex;
        let unicode=getSuit(suitElement);
        let resultElement=document.getElementById("cards");

        let cardValue=['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let cards=[];

        if (cardValue.indexOf(fromElement) !== -1 && cardValue.indexOf(toElement) !== -1) {
            for (let i = cardValue.indexOf(fromElement); i <= cardValue.indexOf(toElement); i++) {
                let card={
                    suit:unicode,
                    value:cardValue[i]
                };
                cards.push(card);
            }
            for (let card of cards) {
                let divElement=document.createElement("div");
                let leftP = document.createElement('p');
                let middleP = document.createElement('p');
                let rightP = document.createElement('p');
                divElement.setAttribute("class","card");
                divElement.appendChild(leftP);
                divElement.appendChild(middleP);
                divElement.appendChild(rightP);
                leftP.innerHTML=card.suit;
                middleP.innerHTML=card.value;
                rightP.innerHTML=card.suit;
                resultElement.appendChild(divElement);
            }
        }
    }

    function getSuit(suitElement) {
        switch (suitElement) {
            case 0:
                unicode="&hearts;";
                break;
            case 1:
                unicode="&spades;";
                break;
            case 2:
                unicode="&diamond;";
                break;
            case 3:
                unicode="&clubs;";
                break;
        }
        return unicode;
    }
}