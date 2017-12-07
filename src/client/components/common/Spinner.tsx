import React from 'react'
import {View, ActivityIndicator} from 'react-native'

const Spinner : any = ({size}) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'}/>
    </View>
  )
}

const styles : any = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export {Spinner}