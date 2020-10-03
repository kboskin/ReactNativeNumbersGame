import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {useState} from 'react'
import AppBar from './components/AppBar'
import StartGameScreen from './components/StartGameScreen'
import GameScreen from './components/GameScreen'
export default function App() {
  const [userNumber, setUserNumber] = useState()

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>

  if (userNumber){
    content = <GameScreen userChoise={userNumber}/>
  }
  return (
    <View style={styles.screen}>
        <StatusBar translucent={true} barStyle="dark-content" />
        <AppBar title={'Guess a number'}/>
        {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
