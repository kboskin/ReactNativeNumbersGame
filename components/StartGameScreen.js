import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback, Button, Keyboard, Alert} from 'react-native'
import Card from "./Card"
import Colors from '../constants/color'
import InputComponent from './InputComponent'


const StartGameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [userConfirmed, setUserConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState(false)

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = (text) => {
        setUserConfirmed(false)
        setEnteredValue('')
    }

    const confirmInputHandler = () => {
        const chooseNumber = parseInt(enteredValue)
        if (chooseNumber === NaN || chooseNumber <= 0 || chooseNumber > 99){
            // Alert.alert(
            //     "Invalid number", 
            //     "number has to be a number [0, 99)", 
            //     [
            //         {   text: 'Ok', 
            //             style: "destructive", 
            //             onPress:resetInputHandler
            //         }
            //     ]
            // )
            return;
        }
        setUserConfirmed(true)
        // will work because component render will be executed after the whole bunch
        setSelectedNumber(parseInt(enteredValue))
        setEnteredValue('')
    }
    let confirmedOutput
    if (userConfirmed){
        confirmedOutput = <Text>Output: {selectedNumber}</Text>
    }

    return(
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.root}>
            <Text>Start a new Game</Text>
            <Card style={styles.mainViewContainer}>
                <Text>Select a Number</Text>
                <InputComponent 
                    style={styles.input} 
                    blurOnSubmit 
                    autoCapitalize='none' 
                    keyboardType='numeric' 
                    autoCorrect={false} 
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                />
                <View style={styles.buttonsView}>
                    <View 
                        style={styles.button}>
                        <Button 
                            title="Reset" 
                            color={Colors.primaryColor} 
                            onPress={resetInputHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title="Confirm" 
                            color={Colors.accentColor}
                            onPress={confirmInputHandler}/>
                    </View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        
    },
    text: {
        color: 'black',
        fontSize: 18
    },
    mainViewContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: 'center',
        padding: 10,
    },
    buttonsView: {
        width: "100%", 
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: "row", 
    },
    button: {
        width: "40%"
    },
    input: {
        width: 50,
        textAlign: 'center'
    }

})

export default StartGameScreen;