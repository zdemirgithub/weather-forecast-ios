# Weather Forecast App

## Overview

The **Weather Forecast App** is a high-level React Native application that provides users with real-time weather information. Users can search for any city worldwide and receive current weather conditions along with a 5-day weather forecast. The app utilizes the OpenWeather API to fetch and display the data.

## Features

- **Search for City Weather**: Users can enter any city name to get the current weather and forecast.
- **Current Weather Information**: Displays the temperature, weather conditions, humidity, and wind speed.
- **5-Day Weather Forecast**: Shows daily weather predictions for the next 5 days.
- **Responsive Design**: The app is optimized for both iOS and Android devices.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/weather-forecast-app.git
   cd weather-forecast-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Get an API Key**:
   - Sign up at [OpenWeather](https://openweathermap.org/api) to get a free API key.
   - Replace `'your_openweather_api_key'` in the `utils/api.js` file with your actual API key.

4. **Run the app**:
   - For iOS:
     ```bash
     npx react-native run-ios
     ```
   - For Android:
     ```bash
     npx react-native run-android
     ```

## Usage

1. **Search for a City**: Enter the name of any city in the search bar and press the "Search" button.
2. **View Current Weather**: The app will display the current temperature, weather description, humidity, and wind speed for the selected city.
3. **View 5-Day Forecast**: Below the current weather, the app shows a 5-day forecast with temperature and weather conditions for each day.

## Project Structure

- **App.js**: The entry point of the app, setting up the main `WeatherScreen`.
- **components/**
  - `CurrentWeather.js`: Component to display current weather details.
  - `ForecastItem.js`: Component to display individual forecast items.
  - `SearchBar.js`: Component for searching weather by city name.
- **screens/**
  - `WeatherScreen.js`: The main screen that combines all components and handles API calls.
- **utils/**
  - `api.js`: Utility file for fetching weather data from the OpenWeather API.


## Dependencies

- **React Native**
- **React Navigation** (for potential future navigation features)
- **OpenWeather API**

## Contributing

Contributions are welcome! If you have ideas for improvements or new features, feel free to open an issue or submit a pull request.


## Acknowledgments

This app was created as a demonstration of React Native capabilities and to provide a simple and functional weather forecast tool.


This `README.md` provides a comprehensive overview of the Weather Forecast React Native application, including installation instructions, usage, project structure, and contribution guidelines. You can customize it further based on your project's specific needs.
