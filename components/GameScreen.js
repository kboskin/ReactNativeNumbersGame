import React, { useState, useRef, useEffect } from 'react'
import {View, Text, StyleSheet, Button, Alert} from "react-native"
import Card from './Card'
import NumberContainer from "./NumberContainer"
import MainButton from "./CustomButton"

const generateRandomBetween = (min, max, exclude) => {
    min  = Math.ceil(min)
    max = Math.floor(max)
    const rndNumber = Math.floor(Math.random() * (max - min)) + min
    if (rndNumber === exclude){
        return generateRandomBetween(min, max, exclude)
    }
    else {
        return rndNumber
    }

}

const GameScreen = (props) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoise))
    const [rounds, setRounds] = useState(0)

    const currLow = useRef(1)
    const currHigh = useRef(100)

    useEffect(() => {
        if (currentGuess == props.userChoise){
            props.onGameOver(rounds)
        }
    }, [currentGuess, props.userChoise, props.onGameOver])

    const nextGuessHandler = (direction) => {
        if (direction === 'lower' && currentGuess < props.userChoise || (direction === 'greater' && currentGuess > props.userChoise)){
             Alert.alert("Don't lie", "You know, that this is wrong:)", [{text: "Sorry", style:"cancel"}])
             return;
        }

        if (direction == 'lower'){
            currHigh.current = currentGuess
        } else {
            currLow.current = currentGuess
        }

        const nextNumber = generateRandomBetween(currLow.current, currHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(rounds => rounds + 1)
    }

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess: </Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonsContainer}>
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>Lower</MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>Greater</MainButton>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    buttonsContainer: {
        flexDirection: "row", 
        justifyContent: "space-around",
        marginTop: 20,
        width: 400,
        maxWidth: "80%"
    }
})

export default GameScreen