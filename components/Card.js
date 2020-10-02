import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


const Card = (props) => {
    return(
        <View style={{...styles.mainViewContainer, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    mainViewContainer: {
        padding: 10,
        // ios only
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.6,
        backgroundColor: 'white',
        // android only
        elevation: 5
    },
    buttonsView: {
        width: "100%", 
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: "row", 
    },
    button: {
        width: "40%"
    }
})

export default Card;