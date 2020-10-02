import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Colors from '../constants/color'


const AppBar = (props) => {
    return(
        <View style={styles.root}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'black',
        fontSize: 18
    }
})

export default AppBar;