
api = "9cbc884067adbaef3afbacaa15e0e389"
city = "sacramento"

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + api, function (data) {
    console.log(data);

    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = data.main.temp;
    var humidity = data.main.humidity;
    var wind = data.wind.speed;

    $(".icon").attr("src", icon);
    $("#temp").append(" " + temp + " °F");
    $("#humidity").append(" " + humidity + " %");
    $("#wind").append(" " + wind + " MPH");

    var uvIndex = "https://api.openweathermap.org/data/2.5/uvi?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=" + api;
    var uvIndex1 = data.index;
    $("#uvIndex").append(" " + uvIndex);
});
