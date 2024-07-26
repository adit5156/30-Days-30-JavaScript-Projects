const form = document.querySelector("form");
const input = document.getElementById("input");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherImage = document.getElementById("weatherImage");
const weatherDesc = document.getElementById("weatherDesc");
const weatherCard = document.querySelector(".weatherCard");

const apiKey = '7c3bead7a0a97467f4fbd1ed69bb30d8';
let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=&appid=${apiKey}&units=metric
`;

form.addEventListener("submit",(e) => {
    e.preventDefault();
    console.log(input.value);
    getWeatherData(input.value).then(data => {
        console.log(data);
        if(data.hasOwnProperty("message")) {
            let previousValue = input.value;
            input.value = "City Not Found!";
            setTimeout(()=> {
                input.value = previousValue;
            }, 2000);
            weatherCard.style.cssText = "display: none;"
        }
        else {
            weatherCard.style.cssText = "display: flex;";
            cityName.innerText = `${data.name}`;
            temperature.innerText = `${Math.round(data.main.temp)}°C `;
            humidity.innerText = `Humidity ${data.main.humidity}%`;
            wind.innerText = `Wind Speed ${Math.round(data.wind.speed)} km/hr`;
            weatherImage.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            weatherImage.style.cssText = "display: flex;";
            weatherDesc.innerText = `${data.weather[0].main}`;
        }
    });

});

async function getWeatherData(cityName) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    return data;
}