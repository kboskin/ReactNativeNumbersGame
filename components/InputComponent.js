import React, {useState} from 'react'
import {TextInput, StyleSheet} from 'react-native' 

const InputComponent = (props) => {
    return(
        <TextInput {...props} style={{...styles.input, ...props.styles}}/>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginVertical: 10
    }
})

export default InputComponent