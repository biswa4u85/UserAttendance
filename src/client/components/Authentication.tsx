import React, {Component} from 'react'
import {Actions} from 'react-native-router-flux'
import firebase from 'firebase'
import {Spinner} from './common'

export default class Authentication extends Component {

    componentDidMount() {
        firebase
            .auth()
            .onAuthStateChanged(function (user) {
                if (user && user.uid) {
                    Actions.dash({type: 'reset'})
                } else {
                    Actions.login({type: 'reset'})
                }
            })
    }

    render() {
        return <Spinner/>
    }
}