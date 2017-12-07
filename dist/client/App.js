import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import { Actions, Router, Stack, Scene } from 'react-native-router-flux';
import Authentication from './components/Authentication';
import Logout from './components/Logout';
import Login from './components/Login';
import Register from './components/Register';
import Forget from './components/Forget';
import Teams from './components/Teams';
import Team from './components/Team';
export default class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBHsu6LKFvqh0ZihHDPguAGfTED6SFwB1c',
            authDomain: 'teamchat-232e8.firebaseapp.com',
            databaseURL: 'https://teamchat-232e8.firebaseio.com',
            projectId: 'teamchat-232e8',
            storageBucket: 'teamchat-232e8.appspot.com',
            messagingSenderId: '974431142691'
        };
        firebase.initializeApp(config);
    }
    onPressLogOut() {
        Actions.logout();
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (React.createElement(Provider, { store: store },
            React.createElement(Router, null,
                React.createElement(Stack, { key: 'root' },
                    React.createElement(Scene, { key: 'authentication', hideNavBar: true, component: Authentication, title: 'Authentication', initial: true }),
                    React.createElement(Scene, { key: 'login', hideNavBar: true, component: Login, title: 'Login' }),
                    React.createElement(Scene, { key: 'logout', hideNavBar: true, component: Logout, title: 'Logout' }),
                    React.createElement(Scene, { key: 'forget', hideNavBar: true, component: Forget, title: 'Forget' }),
                    React.createElement(Scene, { key: 'register', hideNavBar: true, component: Register, title: 'Register' }),
                    React.createElement(Scene, { key: 'dash', rightButtonImage: require('../../images/fb-icon.png'), onRight: () => this.onPressLogOut(), component: Teams, title: 'Teams' }),
                    React.createElement(Scene, { key: 'team', component: Team, title: 'Team' })))));
    }
}
//# sourceMappingURL=App.js.map