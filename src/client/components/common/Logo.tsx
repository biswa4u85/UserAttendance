import React from 'react'
import {Text} from 'react-native'

export const Logo : any = () => {
    return (
        <Text style={styles.title}>TeamChat</Text>
    )
}

const styles : any = {
    title: {
        fontSize: 30,
        fontFamily: 'Arial',
        marginBottom: 50,
        color: '#000000',
        textAlign: 'center'
    }
}