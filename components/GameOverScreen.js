import React from "react"
import { Text, View, StyleSheet, Button } from "react-native"

const GameOverScreen = (props) => {
    return(
    <View style={styles.screen}>
        <Text>Game over, user number : {props.userNumber}</Text>
        <Text>Rounds number : {props.roundsCount}</Text>
        <View style={styles.restartGameContainer}><Button title="Restart game" onPress={props.restartGameHandler}></Button></View>
    </View>
    )  
} 

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    restartGameContainer: {
        marginVertical: 10,
        width: "80%"
    }
})

export default GameOverScreen