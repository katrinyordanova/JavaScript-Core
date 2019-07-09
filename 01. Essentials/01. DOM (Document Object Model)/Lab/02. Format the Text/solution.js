function solve(){
    let counter=0;
    let index=0;
    let newArray=[];

    let mainParagraph=document.getElementById('input').textContent;

    for (let i=0;i<mainParagraph.length;i++){
        if (mainParagraph[i] === '.'){
            counter++;
        }
        if (counter === 3) {
            newArray.push(mainParagraph.slice(index,i+1));
            index=i+1;
            counter=0;
        }
    }

    let lastParagraph=mainParagraph.slice(mainParagraph.length-1);
    newArray.push(lastParagraph);

    for (let paragraphs of newArray){
        let paragraph=document.createElement('p');
        document.getElementById('output').appendChild(paragraph);
        paragraph.textContent=paragraphs;
    }
}