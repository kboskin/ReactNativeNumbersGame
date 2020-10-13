import React from "react"
import { Text, View, StyleSheet, Button, Image } from "react-native"

const GameOverScreen = (props) => {
    return(
    <View style={styles.screen}>
        <Text>Game over, user number : {props.userNumber}</Text>
        <View style={styles.imageContainer}>
            <Image 
            source={require('../assets/img/image_success.jpg')}
            style={styles.image}/>
        </View>
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
    },
    image: {
        width:"100%",
        height: "100%",
    }, 
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        width:300,
        height: 300,
        borderColor: "black",
        overflow:"hidden"
    }
})

export default GameOverScreen