function attachEventsListeners(){
    let daysButton=document.getElementById("daysBtn");
    let hoursButton=document.getElementById("hoursBtn");
    let minutesButton=document.getElementById("minutesBtn");
    let secondsButton=document.getElementById("secondsBtn");

    daysButton.addEventListener("click",() => {
        let daysValue=document.getElementById("days").value;
        let hoursInput=document.getElementById("hours");
        let minutesInput=document.getElementById("minutes");
        let secondsInput=document.getElementById("seconds");

        hoursInput.value=daysValue*24;
        minutesInput.value=hoursInput.value*60;
        secondsInput.value=minutesInput.value*60;
    });

    hoursButton.addEventListener("click",() => {
        let hoursValue=document.getElementById("hours").value;
        let daysInput=document.getElementById("days");
        let minutesInput=document.getElementById("minutes");
        let secondsInput=document.getElementById("seconds");

        daysInput.value=hoursValue/24;
        minutesInput.value=hoursValue*60;
        secondsInput.value=minutesInput.value*60;
    });

    minutesButton.addEventListener("click",() => {
        let minutesValue=document.getElementById("minutes").value;
        let hoursInput=document.getElementById("hours");
        let daysInput=document.getElementById("days");
        let secondsInput=document.getElementById("seconds");

        secondsInput.value=minutesValue*60;
        hoursInput.value=minutesValue/60;
        daysInput.value=hoursInput.value/24;
    });

    secondsButton.addEventListener("click",() => {
        let secondsInput=document.getElementById("seconds").value;
        let daysValue=document.getElementById("days");
        let hoursInput=document.getElementById("hours");
        let minutesInput=document.getElementById("minutes");

        minutesInput.value=secondsInput/60;
        hoursInput.value=minutesInput.value/60;
        daysValue.value=hoursInput.value/24;
    });
}