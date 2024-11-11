function getWeatherData(lat, lon) {
    const apiKey = 'b14e24452e3a476fa2e103215242810';
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=10&aqi=no&alerts=no`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Animate elements using GSAP
            gsap.from("#currentWeather", { opacity: 0, y: -50, duration: 1 });
            gsap.from("#hourlyChart", { opacity: 0, x: -100, duration: 1.5 });

            // Populate current weather details
            document.getElementById('location').textContent = `${data.location.name}, ${data.location.country}`;
            document.getElementById('condition').textContent = data.current.condition.text;
            document.getElementById('temperature').textContent = `${data.current.temp_c}°C`;
            document.getElementById('weatherIcon').src = `https:${data.current.condition.icon}`;
            document.getElementById('additionalDetails').innerHTML = `
                <p>Humidity: ${data.current.humidity}%</p>
                <p>Wind: ${data.current.wind_kph} kph ${data.current.wind_dir}</p>
                <p>Pressure: ${data.current.pressure_mb} mb</p>
            `;

            // Create hourly forecast chart data
            const labels = data.forecast.forecastday[0].hour.map(hour => hour.time.split(' ')[1]);
            const temperatures = data.forecast.forecastday[0].hour.map(hour => hour.temp_c);

            const ctx = document.getElementById('hourlyChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Temperature (°C)',
                        data: temperatures,
                        borderColor: 'rgba(255, 255, 255, 0.8)',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Time',
                                color: '#ffffff'
                            },
                            ticks: {
                                color: '#ffffff'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Temperature (°C)',
                                color: '#ffffff'
                            },
                            ticks: {
                                color: '#ffffff'
                            }
                        }
                    }
                }
            });

            // Populate 10-day forecast cards
            const dailyForecastContainer = document.getElementById('dailyForecast');
            dailyForecastContainer.innerHTML = ''; // Clear previous data
            data.forecast.forecastday.forEach(day => {
                const date = new Date(day.date).toDateString();
                const card = document.createElement('div');
                card.className = 'p-4 bg-white bg-opacity-10 rounded-lg shadow-md';
                card.innerHTML = `
                    <p class="font-semibold">${date}</p>
                    <img src="https:${day.day.condition.icon}" alt="Weather Icon" class="mx-auto my-2 w-16 h-16">
                    <p>${day.day.condition.text}</p>
                    <p>Max: ${day.day.maxtemp_c}°C</p>
                    <p>Min: ${day.day.mintemp_c}°C</p>
                `;
                dailyForecastContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            document.getElementById('location').textContent = 'Error loading weather data';
        });
}

// Use the Geolocation API to get the user's current location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        position => {
            const { latitude, longitude } = position.coords;
            getWeatherData(latitude, longitude);
        },
        error => {
            console.error('Error obtaining location:', error);
            document.getElementById('location').textContent = 'Unable to fetch location';
        }
    );
} else {
    document.getElementById('location').textContent = 'Geolocation not supported by your browser';
}