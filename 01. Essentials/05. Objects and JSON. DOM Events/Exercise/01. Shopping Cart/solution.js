function solve() {
    let products=[];

    for (let index = 0; index < 3; index++) {
        let product=document.getElementsByClassName("product")[index];
        let name=product.children[1].textContent;
        let price=Number(product.children[2].textContent.split(": ")[1]);

        document.getElementsByTagName("button")[index].addEventListener("click",() =>{
            products.push({name,price});
            let textareaElement=document.getElementsByTagName("textarea")[0];
            textareaElement.value+=`Added ${name} for ${price.toFixed(2)} to the cart.\n`;

        });
    }

    document.getElementsByTagName("button")[3].addEventListener("click",() =>{
        let uniqueProducts=products.map(x=>x.name).filter((element,index,array) => {
        if (array.indexOf(element)===index){
            return element;
        }
        });
        let list=products.map(x=>x.price).reduce((a,b) => { return a+b});
        let textareaElement=document.getElementsByTagName("textarea")[0];
        textareaElement.value+=`You bought ${uniqueProducts.join(", ")} for ${list.toFixed(2)}.\n`;
    });


}