import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './components/AppBar'
import StartGameScreen from './components/StartGameScreen'
export default function App() {
  return (
    <View style={styles.screen}>
        <StatusBar translucent={true} barStyle="dark-content" />
        <AppBar title={'Guess a number'}/>
        <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
