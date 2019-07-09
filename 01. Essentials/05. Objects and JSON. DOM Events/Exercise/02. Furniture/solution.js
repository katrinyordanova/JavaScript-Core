function solve() {
    let listOfFurniture=[];
    let totalSum=0;
    let decorationFactors=[];

    //[{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]
  document.getElementsByTagName("button")[0].addEventListener("click",() => {
      let listTextArea=JSON.parse(document.getElementsByTagName("textarea")[0].value);

      for (let listTextAreaElement of listTextArea) {
          let furnitureListElement=document.getElementById("furniture-list");
          let addDivElement=document.createElement("div");
          addDivElement.setAttribute("class","furniture");
          let name=document.createElement("p");
          name.innerHTML=`Name: ${listTextAreaElement.name}`;
          addDivElement.appendChild(name);
          let image=document.createElement("img");
          image.setAttribute("src",listTextAreaElement.image);
          addDivElement.appendChild(image);
          let price=document.createElement("p");
          price.innerHTML=`Price: ${listTextAreaElement.price}`;
          addDivElement.appendChild(price);
          let decorationFactor=document.createElement("p");
          decorationFactor.innerHTML=`Decoration factor: ${listTextAreaElement.decFactor}`;
          addDivElement.appendChild(decorationFactor);
          let checkBox=document.createElement("input");
          checkBox.setAttribute("type","checkbox");
          addDivElement.appendChild(checkBox);
          furnitureListElement.appendChild(addDivElement);
      }
  });

    document.getElementsByTagName("button")[1].addEventListener("click",() => {
        let product=Array.from(document.getElementById("furniture-list").children);
        for (let element of product) {
            let isChecked=element.getElementsByTagName("input")[0].checked;
            if (isChecked){
                let name=element.getElementsByTagName("p")[0].innerHTML.split(": ")[1];
                listOfFurniture.push(name);
                let price=+element.getElementsByTagName("p")[1].innerHTML.split(": ")[1];
                totalSum+=price;
                let decorationFactor=+element.getElementsByTagName("p")[2].innerHTML.split(": ")[1];
                decorationFactors.push(decorationFactor);
            }
        }
        let resultArea=document.getElementsByTagName("textarea")[1];
        resultArea.value+=`Bought furniture: ${listOfFurniture.join(", ")}\n`;
        resultArea.value+=`Total price: ${totalSum.toFixed(2)}\n`;
        let averageDecorationFactor=decorationFactors.reduce((a,b) => a+b) / decorationFactors.length;
        resultArea.value+=`Average decoration factor: ${averageDecorationFactor}`;
    })
}