function solve() {
    let list={};
    let profit=0;

    document.getElementsByTagName("button")[0].addEventListener("click", add);
    function add(){
      let textareaElement=JSON.parse(document.getElementsByTagName("textarea")[0].value);
      let logTextarea=document.getElementsByTagName("textarea")[2];
      for (let item of textareaElement) {
          if (!list.hasOwnProperty(item.name)){
              list[item.name]={
                  price: item.price,
                  quantity: item.quantity
              };
          }else{
              list[item.name]={
                  price: item.price,
                  quantity: item.quantity+list[item.name].quantity
              };
          }
          logTextarea.innerHTML+=`Successfully added ${item.quantity} ${item.name}. Price: ${item.price}\n`;
      }
  }

  document.getElementsByTagName("button")[1].addEventListener("click",buy);
    function buy() {
      let buyTextarea=JSON.parse(document.getElementsByTagName("textarea")[1].value);

      if (list.hasOwnProperty(buyTextarea.name) && list[buyTextarea.name].quantity >=
      buyTextarea.quantity){
          list[buyTextarea.name].quantity-=buyTextarea.quantity;
          document.getElementsByTagName("textarea")[2].value+=`${buyTextarea.quantity} ${buyTextarea.name} sold for ${buyTextarea.quantity*list[buyTextarea.name].price}.\n`;
          profit+=buyTextarea.quantity*list[buyTextarea.name].price;
      } else{
          document.getElementsByTagName("textarea")[2].value+="Cannot complete order.\n";
      }
  }

  document.getElementsByTagName("button")[2].addEventListener("click", endDay);
    function endDay() {
      document.getElementsByTagName("textarea")[2].value+=`Profit: ${profit.toFixed(2)}.\n`;
      document.getElementsByTagName("button")[0].removeEventListener("click",add);
      document.getElementsByTagName("button")[1].removeEventListener("click",buy);
      document.getElementsByTagName("button")[2].removeEventListener("click",endDay);
    }
}