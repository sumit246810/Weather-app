
const apikey = "1fe240f30f268ecc2c94d074b35dfd4a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon")

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey} `);
    var data = await response.json();

  //  console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


if(data.weather[0].main === "Clouds"){
    weathericon.src = "/images/clouds.png";
}
else if(data.weather[0].main === "Clear"){
    weathericon.src = "/images/clear.png";
}
else if(data.weather[0].main === "Rain"){
    weathericon.src = "/images/rain.png";
}
else if(data.weather[0].main === "Mist"){
    weathericon.src = "/images/mist.png";
}
else if(data.weather[0].main === "Drizzle"){
    weathericon.src = "/images/drizzle.png";
}
else if(data.weather[0].main === "Snow"){
    weathericon.src = "/images/snow.png";
}

};

searchbtn.addEventListener("click", ()=>{
   checkweather(searchbox.value); 
   searchbox.value = "";


})

