
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
});
