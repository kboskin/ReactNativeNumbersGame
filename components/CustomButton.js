import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Colors from "../constants/color"

const MainButtonComponent = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.8}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.accentColor,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        width: "100%"
    },
    buttonText: {
        color: "white",
        fontFamily: "Arialn"
    }
})

export default MainButtonComponent