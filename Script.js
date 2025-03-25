document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("search-btn").addEventListener("click", getWeather);
});

function getWeather() {
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
    const city = document.getElementById("city").value.trim();

    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert("City not found!");
                return;
            }

            // Display weather data
            document.getElementById("city-name").innerText = data.name;
            document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById("weather-description").innerText = `Weather: ${data.weather[0].description}`;
            document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

            document.getElementById("weather-info").style.display = "block";
        })
        .catch(error => {
            alert("Error fetching weather data!");
        });
}
