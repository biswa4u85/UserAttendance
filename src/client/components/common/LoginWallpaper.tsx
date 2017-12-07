import React from 'react'
import {Image, View} from 'react-native'
import {Logo} from './Logo'

export const LoginWallpaper : any = ({children}) => {

  return (
    <View style={styles.mainContiner}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.bgImage}
          source={require('../../../../images/login-bg.png')}/>
      </View>
      <View style={styles.textContainer}>
        <View>
          <Logo/>
        </View>
        <View>
          {children}
        </View>
      </View>
    </View>
  )
}

const styles : any = {
  mainContiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F6F5FA'
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  bgImage: {
    flex: 1,
    width: null,
    justifyContent: 'space-around',
    resizeMode: 'contain'
  },
  textContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    fontSize: 30,
    fontFamily: 'Arial',
    marginBottom: 50,
    color: '#000000',
    textAlign: 'center'
  }
}