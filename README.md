Advanced Local Weather App
An advanced weather app built using HTML, CSS, JavaScript, and Spring Boot. The app provides real-time weather updates based on the user's location, including current weather conditions, hourly temperature forecasts, and a 10-day weather forecast. The frontend is styled with Tailwind CSS and utilizes Chart.js for data visualization, while GSAP is used for smooth animations.

Features
Real-time Weather Updates: Shows current weather data, including temperature, humidity, wind speed, and more.
Hourly Temperature Chart: Displays hourly temperatures in a line chart.
10-Day Weather Forecast: Provides the weather forecast for the next 10 days, including temperature and weather condition.
Geolocation Support: Automatically detects the user's location via the browser’s Geolocation API.
Manual Location Input: Allows users to manually enter a location if geolocation fails.
Responsive Design: Mobile-friendly design using Tailwind CSS.
Smooth Animations: Animations for displaying weather data using GSAP.
Project Structure
bash
Copy code
/Advanced-Local-Weather-App
|-- /backend                   # Spring Boot backend
|   |-- /src
|   |   |-- /main
|   |   |   |-- /java
|   |   |   |   |-- /com
|   |   |   |   |   |-- /weatherapp
|   |   |   |   |   |   |-- WeatherController.java   # Handles API requests
|-- /frontend                  # HTML, CSS, JS frontend
|   |-- index.html             # Main HTML file
|   |-- styles.css             # CSS styles
|   |-- script.js              # JavaScript to fetch weather data
Installation
Clone the repository
bash
Copy code
git clone https://github.com/shuvosinghpartho/Advanced-Local-Weather-App.git
cd Advanced-Local-Weather-App
Frontend Setup
Open the frontend folder in your code editor.

Install any necessary dependencies (if using a build tool like npm or yarn).

Since you're using plain HTML, CSS, and JS, no build tools are required. Just ensure your frontend files are correctly linked and stored in the frontend directory.
Open the index.html file in your browser to view the app.

Backend Setup (Spring Boot)
Open the backend folder and open your Spring Boot project.

Make sure you have Java installed and Maven/ Gradle for managing dependencies.

Add your WeatherAPI key to the backend code (in WeatherController.java).

java
Copy code
private final String apiKey = "your_actual_weather_api_key"; // Replace with your WeatherAPI key
Run the Spring Boot backend by executing:

bash
Copy code
mvn spring-boot:run
This should run the backend on http://localhost:8080.

API Key
Get your API key from WeatherAPI and replace the placeholder key in the WeatherController.java file.

Frontend & Backend Communication
In script.js, update the API URL to point to your Spring Boot backend instead of directly calling the WeatherAPI.

javascript
Copy code
const apiUrl = `http://localhost:8080/api/weather?lat=${lat}&lon=${lon}`;
Ensure that your Spring Boot backend handles weather data fetching and passes it to the frontend.

Run the Application
Start the Spring Boot backend.
Open the frontend/index.html file in your browser.
The app should now fetch weather data and display it with charts and forecasts.
Screenshots
Here are some screenshots of the app in action:

Current Weather View

Hourly Forecast Chart

10-Day Forecast

Note: Replace the screenshot paths with actual ones from your project.

Contributing
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

How to Add Screenshots:
Create a Screenshots Folder: Create a screenshots directory in your repo and upload the images you want to show in the README.

Reference Screenshots: Use the Markdown image syntax to display the screenshots in the README:

markdown
Copy code
![Description](screenshots/your-image.png)
