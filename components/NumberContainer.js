import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Card from './Card'
import Colors from '../constants/color'

const numberContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>Output: {props.children}</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accentColor,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: "center"
    },
    number: {
        color: Colors.accentColor,
        fontSize: 22
    }
})
export default numberContainer
