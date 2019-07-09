 function register() {
   let usernameElement=document.getElementById("username").value;
   let passwordElement=document.getElementById("password").value;

   let hiddenPassword="";

   for (let i=0;i<passwordElement.length;i++){
    hiddenPassword+="*";
   }

   let regexPattern=new RegExp(/(.+)@(.+).(com|bg)/);
   let emailElement=document.getElementById("email").value;
   let matchEmail=regexPattern.test(emailElement);

   if (matchEmail!==null && usernameElement.length>0 && passwordElement.length>0)
   {
    let resultElement=document.getElementById("result");

    setTimeout(() => {
     let heading=document.createElement("h1");
     heading.textContent="Successful Registration!";

     resultElement.appendChild(heading);

     resultElement.innerHTML+=("Username: " + usernameElement);
     resultElement.appendChild(document.createElement("br"));
     resultElement.innerHTML+=("Email: " + emailElement);
     resultElement.appendChild(document.createElement("br"));
     resultElement.innerHTML+=("Password: "+ hiddenPassword);
    },(5000));
   }
 }
