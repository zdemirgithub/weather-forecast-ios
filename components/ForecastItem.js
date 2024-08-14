import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ForecastItem({ forecast }) {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{forecast.date}</Text>
      <Text style={styles.temp}>{Math.round(forecast.temp)}°C</Text>
      <Text style={styles.description}>{forecast.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  date: {
    fontSize: 16,
  },
  temp: {
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});
