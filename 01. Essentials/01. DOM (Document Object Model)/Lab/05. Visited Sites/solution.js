function solve() {
    let softUniDefaultVisits=1;
    let googleDefaultVisits=2;
    let youtubeDefaultVisits=3;
    let wikipediaDefaultVisits=4;
    let gmailDefaultVisits=5;
    let stackoverflowDefaultVisits=6;

    let links=document.getElementsByTagName('a');
    let clickedTimes=document.getElementsByTagName('span');

    let softUniLink=links[0];
    let softUniClickedTimes=clickedTimes[0];

    softUniLink.addEventListener('click',function() {
        softUniDefaultVisits++;
        softUniClickedTimes.textContent=`Visited: ${softUniDefaultVisits} times`;
    });
    
    let googleLink=links[1];
    let googleClickedTimes=clickedTimes[1];
    
    googleLink.addEventListener('click',function () {
        googleDefaultVisits++;
        googleClickedTimes.textContent=`Visited: ${googleDefaultVisits} times`;
    });

    let youtubeLink=links[2];
    let youtubeClickedTimes=clickedTimes[2];

    youtubeLink.addEventListener('click',function () {
        youtubeDefaultVisits++;
        youtubeClickedTimes.textContent=`Visited: ${youtubeDefaultVisits} times`;
    });

    let wikipediaLink=links[3];
    let wikipediaClickedTimes=clickedTimes[3];

    wikipediaLink.addEventListener('click',function () {
        wikipediaDefaultVisits++;
        wikipediaClickedTimes.textContent=`Visited: ${wikipediaDefaultVisits} times`;
    });

    let gmailLink=links[4];
    let gmailClickedTimes=clickedTimes[4];

    gmailLink.addEventListener('click',function () {
        gmailDefaultVisits++;
        gmailClickedTimes.textContent=`Visited: ${gmailDefaultVisits} times`;
    });

    let stackoverflowLink=links[5];
    let stackoverflowClickedTimes=clickedTimes[5];

    stackoverflowLink.addEventListener('click',function () {
        stackoverflowDefaultVisits++;
        stackoverflowClickedTimes.textContent=`Visited: ${stackoverflowDefaultVisits} times` ;
    });
}