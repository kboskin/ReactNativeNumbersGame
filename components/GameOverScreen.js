import React from "react"
import { Text, View, StyleSheet, Button, Image } from "react-native"
import Colors from "../constants/color"

const GameOverScreen = (props) => {
    return(
    <View style={styles.screen}>
        <View style={styles.imageContainer}>
            <Image 
            fadeDuration={1000}
            source={{uri:'https://www.incimages.com/uploaded_files/image/1920x1080/getty_495142964_198701.jpg'}}
            style={styles.image}/>
        </View>
        <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Your phone needed 
            <Text style={styles.highlightText}> {props.roundsCount} </Text> 
             rounds to guess the number 
            <Text style={styles.highlightText}> {props.userNumber} </Text>
        </Text>
        <View style={styles.restartGameContainer}><Button title="Restart game" onPress={props.restartGameHandler}></Button></View>
        </View>
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
    },
    highlightText: {
        color: Colors.accentColor,
        fontFamily: "AriaIn",
        fontSize: 18
    },
    resultContainer: {
        marginVertical: 40,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    resultText: {
        marginHorizontal: 20,
        fontSize: 22,
        fontStyle: "italic"
    }
})

export default GameOverScreen