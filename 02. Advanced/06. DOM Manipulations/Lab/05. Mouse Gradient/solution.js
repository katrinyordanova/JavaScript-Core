function attachGradientEvents(){

    let resultElements=document.getElementById("result");
    let gradient=document.getElementById("gradient");

    gradient.addEventListener("mousemove",function (event) {
        let rectangle=event.target.getBoundingClientRect();
        let y=parseInt(event.offsetX);
        let result=Math.floor(((y-parseInt(rectangle.left))*100)/300);
        resultElements.textContent=result.toString() + "%";
    })
}