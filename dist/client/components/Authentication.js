import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import firebase from "firebase";
import { Spinner } from "./common";
import { userPool } from "../AWS";
export default class Authentication extends Component {
    componentDidMount() {
        console.log(userPool.getCurrentUser());
        firebase.auth().onAuthStateChanged(function (user) {
            if (user && user.uid) {
                Actions.dash({ type: "reset" });
            }
            else {
                Actions.dash({ type: "reset" });
            }
        });
    }
    render() {
        return React.createElement(Spinner, null);
    }
}
//# sourceMappingURL=Authentication.js.map