import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import firebase from 'firebase'
import {Actions, Router, Stack, Scene} from 'react-native-router-flux'
import Authentication from './components/Authentication'
import Logout from './components/Logout'
import Login from './components/Login'
import Register from './components/Register'
import Forget from './components/Forget'
import Teams from './components/Teams'
import Team from './components/Team'

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBHsu6LKFvqh0ZihHDPguAGfTED6SFwB1c',
      authDomain: 'teamchat-232e8.firebaseapp.com',
      databaseURL: 'https://teamchat-232e8.firebaseio.com',
      projectId: 'teamchat-232e8',
      storageBucket: 'teamchat-232e8.appspot.com',
      messagingSenderId: '974431142691'
    }

    firebase.initializeApp(config)
  }

  onPressLogOut() {
    Actions.logout()
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (

      <Provider store={store}>
        <Router>
          <Stack key='root'>
            <Scene
              key='authentication'
              hideNavBar
              component={Authentication}
              title='Authentication'
              initial={true}/>
            <Scene key='login' hideNavBar component={Login} title='Login'/>
            <Scene key='logout' hideNavBar component={Logout} title='Logout'/>
            <Scene key='forget' hideNavBar component={Forget} title='Forget'/>
            <Scene key='register' hideNavBar component={Register} title='Register'/>
            <Scene
              key='dash'
              rightButtonImage={require('../../images/fb-icon.png')}
              onRight={() => this.onPressLogOut()}
              component={Teams}
              title='Teams'/>
            <Scene key='team' component={Team} title='Team'/>
          </Stack>
        </Router>
      </Provider>
    )
  }
}