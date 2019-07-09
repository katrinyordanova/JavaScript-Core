function solve(face,suit) {
    let faces=["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let suits={
        S:"\u2660",
        H:"\u2665",
        D:"\u2666",
        C:"\u2663"
    };

    if (!faces.includes(face.toString()) || !Object.keys(suits).includes(suit.toString())){
        throw new Error("Error");
    }else{
        return face+suits[suit];
    }
}

console.log(solve('10', 'H'));