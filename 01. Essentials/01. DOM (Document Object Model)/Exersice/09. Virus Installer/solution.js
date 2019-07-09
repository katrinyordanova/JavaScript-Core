function solve() {
    let nextButton=document.getElementById("buttons").children[0];
    let cancelButton=document.getElementById("buttons").children[1];
    let agreeChecked=document.getElementsByName("license");
    let firstPage=true;
    let secondPage=false;
    let thirdPage=false;
    nextButton.addEventListener('click',nextButtonEvent);
    cancelButton.addEventListener('click',cancelButtonEvent);

   function cancelButtonEvent(){
       document.getElementById("exercise").children[0].style.display = 'none';
   }

   function nextButtonEvent() {
       if (firstPage){
           firstEvent();
       } 
       else if (secondPage && agreeChecked[0].checked){
           secondEvent();
       }
       else if (thirdPage){
           thirdEvent();
       } 
   }
   
   function firstEvent() {
       document.getElementById("content").style.backgroundImage='none';
       document.getElementById("firstStep").style.display='inline';
       firstPage=false;
       secondPage=true;
   }
   
   function secondEvent() {
       document.getElementById("firstStep").style.display='none';
       document.getElementById("secondStep").style.display='inline';
       nextButton.style.display='none';
       secondPage = false;
       thirdPage = true;
       setTimeout(() => {
          nextButton.style.display='inline';
       },3000);
   }
   
   function thirdEvent() {
       document.getElementById("secondStep").style.display='none';
       document.getElementById("thirdStep").style.display='inline';
       nextButton.style.display='none';
       cancelButton.textContent="Finish";
   }
}
