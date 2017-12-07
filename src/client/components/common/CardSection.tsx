import React from 'react'
import {View} from 'react-native'

const CardSection : any = ({children, style}) => {
    return (
        <View style={[styles.containerStyle, style]}>
            {children}
        </View>
    )
}

const styles : any = {
    containerStyle: {
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
}
export {CardSection}