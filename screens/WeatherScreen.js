import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CurrentWeather from '../components/CurrentWeather';
import ForecastItem from '../components/ForecastItem';
import SearchBar from '../components/SearchBar';
import { fetchWeatherData } from '../utils/api';

export default function WeatherScreen() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = async (city) => {
    setLoading(true);
    const data = await fetchWeatherData(city);
    if (data) {
      setWeatherData(data.current);
      setForecastData(data.forecast);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleSearch('London'); // Default city
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : (
        <>
          <CurrentWeather weatherData={weatherData} />
          <FlatList
            data={forecastData}
            renderItem={({ item }) => <ForecastItem forecast={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  loading: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});
