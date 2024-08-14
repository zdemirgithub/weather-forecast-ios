import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import WeatherScreen from './screens/WeatherScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <WeatherScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
  },
});
