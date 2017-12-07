import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

export const Button : any = ({onPress, bgColor, children}) => {

  const setBgColor : any = bgColor
    ? bgColor
    : '#229EB6'

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
      styles.buttonStyle, {
        backgroundColor: setBgColor
      }
    ]}>
      <Text style={styles.textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles : any = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.4,
    shadowRadius: 2
  }
}