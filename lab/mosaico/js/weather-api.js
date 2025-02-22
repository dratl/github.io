
        const weatherImage = document.getElementById('icon-weather');
        async function getWeather() {
            const apiKey = '5f4204b5e1c30da45f9a0a2b2679138e';
            const city = 'Mexico City';
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            if (weatherImage) {
            weatherImage.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            }
            document.getElementById('weather').innerText = `${city}: ${Math.round(data.main.temp)}°C`;
        }