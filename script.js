document.addEventListener("DOMContentLoaded", function () {
    window.getWeather = function () {
        const city = document.getElementById("city").value;
        const apiKey = "ba95d1f5dddacb67616d01367427d2c8";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const weatherInfo = document.getElementById("weather-info");
                if (data.cod === 200) {
                    weatherInfo.innerHTML = `
                        <h2>${data.name}, ${data.sys.country}</h2>
                        <p>Temperature: ${data.main.temp}°C</p>
                        <p>Weather: ${data.weather[0].description}</p>
                        <p>Humidity: ${data.main.humidity}%</p>
                        <p>Wind Speed: ${data.wind.speed} m/s</p>
                    `;
                } else {
                    weatherInfo.innerHTML = `<p style="color: red;">City not found. Try again.</p>`;
                }
            })
            .catch(error => console.error("Error fetching weather data:", error));
    };
});