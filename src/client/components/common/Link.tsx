import React from 'react'
import {TouchableOpacity} from 'react-native'

export const Link : any = ({onPress, children}) => {

    return (
        <TouchableOpacity onPress={onPress} style={[styles.linkStyle]}>
            {children}
        </TouchableOpacity>
    )
}

const styles : any = {
    linkStyle: {}
}