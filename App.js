import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {useState} from 'react'
import AppBar from './components/AppBar'
import StartGameScreen from './components/StartGameScreen'
import GameScreen from './components/GameScreen'
import GameOverScreen from './components/GameOverScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }

  const endGameHandler = (attemptsNumber) => {
    setGuessRounds(attemptsNumber)
  }

  const restartGameHandler = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>

  if (userNumber && guessRounds <= 0){
    content = <GameScreen userChoise={userNumber} onGameOver={endGameHandler}/>
  } else if (guessRounds > 0){
    content = <GameOverScreen roundsCount={guessRounds} userNumber={userNumber} restartGameHandler={restartGameHandler}/>
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
