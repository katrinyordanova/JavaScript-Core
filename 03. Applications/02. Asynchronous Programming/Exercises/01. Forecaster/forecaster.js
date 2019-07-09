function attachEvents() {
    $('#submit').on('click', getWeather);

    let weatherSymbol= {
        'Sunny':'&#x2600;',
        'Partly sunny':'&#x26C5;',
        'Overcast':'&#x2601;',
        'Rain':'&#x2614;',
        'Degrees':'&#176;'
    };

    async function getWeather() {
        let townName = $('#location').val();
        let mainUrl = 'https://judgetests.firebaseio.com/';
        let locationsUrl = 'locations.json';

        try {
           let locations=await $.ajax({
               method: 'GET',
               url: mainUrl + locationsUrl
           });
            let code=locations.filter(location => location.name === townName)[0].code;

            //[{"code":"ny","name":"New York"},
            // {"code":"london","name":"London"},
            // {"code":"barcelona","name":"Barcelona"}]

            let currentWeather=await $.ajax({
                method:'GET',
                url:mainUrl + `forecast/today/${code}.json`
            });

            let names=currentWeather.name;
            let lowTemperature=currentWeather.forecast.low;
            let highTemperature=currentWeather.forecast.high;
            let symbol=currentWeather.forecast.condition;
            //{"forecast":{"condition":"Rain","high":"8","low":"2"},"name":"London, UK"}

            let forecast=currentWeather.forecast;

            let threeDayWeather=await $.ajax({
                method:'GET',
                url:mainUrl + `forecast/upcoming/${code}.json`
            });
            //{"forecast":[{"condition":"Rain","high":"8","low":"6"},
            // {"condition":"Rain","high":"11","low":"3"},
            // {"condition":"Rain","high":"8","low":"5"}],"name":"London"}

            let threeDayForecast=threeDayWeather.forecast;

            $('#forecast').css('display','block');

            Object.keys(weatherSymbol).forEach((key) => {
                if (key===forecast.condition){
                    $('#current').append(`<span class="condition symbol">${weatherSymbol[key]}</span>`);
                }
            });

            $('#current').append('<span class="condition">' +
                `<span class="forecast-data">${names}</span>` +
                `<span class="forecast-data">${lowTemperature}&#176;/${highTemperature}&#176;</span>`+
                `<span class="forecast-data">${symbol}</span>` +
                '</span>');
            //console.log(threeDayWeather.forecast[0].condition);
            for (let day in threeDayWeather){
                console.log(threeDayWeather);
                $('#upcoming').append((`<span class="upcoming">` +
                    `<span class="symbol">${weatherSymbol(day.condition)}</span>` +
                    `<span class="forecast-data">${day.low}&#176;/${day.high}&#176;</span>`+
                    `<span class="forecast-data">${threeDayWeather.forecasts[0].condition}</span>` +
                    '</span>'
                ));
            }

            // let threeSymbols;
            // for (let day of threeDayWeather.forecast){
            //     threeSymbols=`<span class="symbol">${day.condition}</span>`;
            //     console.log(threeSymbols);
            // }

            // Object.keys(weatherSymbol).forEach((key) => {
            //     if (key===threeDayWeather.forecast[0].condition) {
            //         let threeSymbols = weatherSymbol[key];
            //     }});


        }catch (error) {
            $('#forecast').text('Error');
        }
    }
}

//100/100
// function attachEvents(){
//     let weatherSymbolsObj = {
//         Sunny: "☀",
//         Partlysunny: "⛅",
//         Overcast: "☁",
//         Rain: "☂",
//         Degrees: "°"
//     };
//
//     let getWeatherBtn = $("#submit");
//     getWeatherBtn.on("click", function(){
//         let locationName = $("#location").val();
//
//         $("#current").html("<div class='label'>Current conditions</div>");
//         $("#upcoming").html("<div class='label'>Three-day forecast</div>");
//
//         $.get("https://judgetests.firebaseio.com/locations.json")
//             .then((data) => {
//                 let location = Array.from(data).find((l) => l.name === locationName);
//                 if(location !== undefined){
//                     $.get("https://judgetests.firebaseio.com/forecast/today/" + location.code + ".json")
//                         .then((castData) => {
//                             $("#forecast").removeAttr("style");
//                             let symbol = weatherSymbolsObj[castData.forecast.condition.split(" ").join("")];
//                             let current = $("#current");
//
//                             current.append("<span class='condition symbol'>" + symbol + "</span");
//                             current.append(
//                                 "<span class='condition'>"
//                                 +
//                                 "<span class='forecast-data'>" + castData.name + "</span>"
//                                 +
//                                 "<span class='forecast-data'>" + castData.forecast.low + weatherSymbolsObj["Degrees"] + "/" +  castData.forecast.high + weatherSymbolsObj["Degrees"]  + "</span>"
//                                 +
//                                 "<span class='forecast-data'>" + castData.forecast.condition + "</span>"
//                                 +
//                                 "</span>");
//                         });
//
//                     $.get("https://judgetests.firebaseio.com/forecast/upcoming/" + location.code + ".json")
//                         .then((upcomingData) => {
//                             let upcoming = $("#upcoming");
//                             console.log(upcomingData);
//                             Array.from(upcomingData.forecast).forEach((cast) => {
//                                 let currentSymbol = weatherSymbolsObj[cast.condition.split(" ").join("")];
//                                 upcoming.append(
//                                     "<span class='upcoming'>"
//                                     +
//                                     "<span class='symbol'>" + currentSymbol + "</span>"
//                                     +
//                                     "<span class='forecast-data'>" + cast.low + weatherSymbolsObj["Degrees"] + "/" +  cast.high + weatherSymbolsObj["Degrees"]  + "</span>"
//                                     +
//                                     "<span class='forecast-data'>" + cast.condition + "</span>"
//                                     +
//                                     "</span>");
//                             });
//                         })
//                 } else {
//                     $("#forecast").html("Error");
//                 }
//             })
//             .catch(() => {
//                 $("#forecast").html("Error");
//             });
//     });
// }