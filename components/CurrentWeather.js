import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CurrentWeather({ weatherData }) {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{weatherData.name}</Text>
      <Text style={styles.temp}>{Math.round(weatherData.main.temp)}°C</Text>
      <Text style={styles.description}>{weatherData.weather[0].description}</Text>
      <View style={styles.details}>
        <Text>Humidity: {weatherData.main.humidity}%</Text>
        <Text>Wind: {weatherData.wind.speed} m/s</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
  },
  city: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 20,
    fontStyle: 'italic',
  },
  details: {
    marginTop: 10,
    alignItems: 'center',
  },
});
