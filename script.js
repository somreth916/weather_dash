
api = "9cbc884067adbaef3afbacaa15e0e389"
city = "Sacramento"

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + api, function (data) {
    console.log(data);

    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = data.main.temp;
    var humidity = data.main.humidity;
    var wind = data.wind.speed;
    var cityName = data.name;

    $(".icon").attr("src", icon);
    $("#temp").append(" " + temp + " °F");
    $("#humidity").append(" " + humidity + " %");
    $("#wind").append(" " + wind + " MPH");
    $("#city").append(" " + cityName);

    var uvIndex = "https://api.openweathermap.org/data/2.5/uvi?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=" + api;
    $.ajax({ url: uvIndex, method: "GET" }).then(function (response) {
        $("#uvIndex").append(" " + response.value);
    });
});

$.getJSON("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + api, function (data) {
    console.log(data);
    var date1 = data.list[0].dt_txt;
    var icon1 = "https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
    var temp1 = data.list[0].main.temp;
    var humid1 = data.list[0].main.humidity;

    var date2 = data.list[4].dt_txt;
    var icon2 = data.list[4]
    var temp2 = data.list[4].main.temp;
    var humid2 = data.list[4].main.humidity;

    var date3 = data.list[12].dt_txt;
    var icon3 = data.list[12]
    var temp3 = data.list[12].main.temp;
    var humid3 = data.list[12].main.humidity;

    var date4 = data.list[20].dt_txt;
    var icon4 = data.list[20]
    var temp4 = data.list[20].main.temp;
    var humid4 = data.list[20].main.humidity;

    var date5 = data.list[28].dt_txt;
    var icon5 = data.list[28]
    var temp5 = data.list[28].main.temp;
    var humid5 = data.list[28].main.humidity;

    $("#date1").append(date1);
    $("#temp1").append(" " + temp1 + " °F");
    $("#humidity1").append(" " + humid1 + " %");

    $("#date2").append(date2);
    $("#temp2").append(" " + temp2 + " °F");
    $("#humidity2").append(" " + humid2 + " %");

    $("#date3").append(date3);
    $("#temp3").append(" " + temp3 + " °F");
    $("#humidity3").append(" " + humid3 + " %");

    $("#date4").append(date4);
    $("#temp4").append(" " + temp4 + " °F");
    $("#humidity4").append(" " + humid4 + " %");

    $("#date5").append(date5);
    $("#temp5").append(" " + temp5 + " °F");
    $("#humidity5").append(" " + humid5 + " %");


});
