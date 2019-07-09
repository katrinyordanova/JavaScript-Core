function timer() {
    let isTriggered=false;

    let hours=$("#hours");
    let minutes=$("#minutes");
    let seconds=$("#seconds");

    let startButton=$("#start-timer");
    let stopButton=$("#stop-timer");

    let hoursCounter=0;
    let minutesCounter=0;
    let secondsCounter=0;

    function countTime() {
        isTriggered=true;

        secondsCounter++;

        if (secondsCounter>59){
            secondsCounter=0;
            minutesCounter++;
        }else if (minutesCounter>59){
            minutesCounter=0;
            hoursCounter++;
        }

        if (secondsCounter<10){
            seconds.text("0" + secondsCounter.toString());
        } else{
            seconds.text(secondsCounter.toString());
        }

        if (minutesCounter<10){
            minutes.text("0" + minutesCounter.toString());
        } else{
            minutes.text(minutesCounter.toString());
        }

        if (hoursCounter<10){
            hours.text("0" + hoursCounter.toString());
        } else{
            hours.text(hoursCounter.toString());
        }
    }

    let time;

    startButton.on("click", () => {
        if (!isTriggered){
            time=setInterval(countTime,1000);
        }
    });

    stopButton.on("click", () => {
        isTriggered=false;
        clearInterval(time);
    });
}