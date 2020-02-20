
api = "9cbc884067adbaef3afbacaa15e0e389"

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=sacramento&units=imperial&appid=" + api, function (data) {
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = data.main.temp;
    var humidity = data.main.humidity;
    var wind = data.wind.speed;
    var uvIndex =


        $(".icon").attr("src", icon);
    $("#temp").append(" " + temp + " °F");
    $("#humidity").append(" " + humidity + " %");
    $("#wind").append(" " + wind + " MPH");
});