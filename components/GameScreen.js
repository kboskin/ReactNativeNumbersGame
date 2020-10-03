import React, { useState } from 'react'
import {View, Text, StyleSheet, Button} from "react-native"
import Card from './Card'
import NumberContainer from "./NumberContainer"

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
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess: </Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonsContainer}>
                <Button title="Lower"></Button>
                <Button title="Greater"></Button>
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
        width: 300,
        maxWidth: "80%"
    }
})

export default GameScreen