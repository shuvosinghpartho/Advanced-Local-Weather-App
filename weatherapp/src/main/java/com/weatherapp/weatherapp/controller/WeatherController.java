package com.weatherapp.weatherapp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class WeatherController {
     private final String apiKey = "your_actual_weather_api_key"; // Replace with your API key

    @GetMapping("/api/weather")
    public Object getWeather(@RequestParam double lat, @RequestParam double lon) {
        // URL to fetch weather data from the external API
        String url = "https://api.weatherapi.com/v1/forecast.json?key=" + apiKey +
                     "&q=" + lat + "," + lon + "&days=10&aqi=no&alerts=no";

        // RestTemplate to make the HTTP request to the weather API
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, Object.class); // Returns the JSON response from the API
    }
}
