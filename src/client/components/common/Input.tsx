import React from 'react'
import {TextInput} from 'react-native'

export const Input : any = ({value, onChangeText, placeholder, secureTextEntry}) => {

  return (<TextInput
    secureTextEntry={secureTextEntry}
    placeholder={placeholder}
    autoCorrect={false}
    style={styles.inputStyle}
    value={value}
    onChangeText={onChangeText}/>)
}

const styles : any = {
  inputStyle: {
    color: '#2E2E2E',
    padding: 5,
    fontSize: 13,
    lineHeight: 13,
    borderBottomWidth: 1,
    width: '100%',
    borderColor: '#C1C1C1'
  }
}