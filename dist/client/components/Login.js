import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { loginUpdate, loginUser } from '../actions';
import { LoginWallpaper, CardSection, Input, Button, Link, Spinner } from './common';
class Login extends Component {
    onButtonPress() {
        const { email, password } = this.props;
        this
            .props
            .loginUser({ email, password });
    }
    renderButton() {
        if (this.props.loading) {
            return React.createElement(Spinner, null);
        }
        return (React.createElement(Button, { bgColor: '#000000', onPress: this
                .onButtonPress
                .bind(this) }, "Login"));
    }
    render() {
        return (React.createElement(LoginWallpaper, null,
            React.createElement(Text, { style: styles.loginLable }, "Login with"),
            React.createElement(CardSection, null,
                React.createElement(Input, { placeholder: 'Email', value: this.props.email, onChangeText: value => this
                        .props
                        .loginUpdate({ prop: 'email', value }) })),
            React.createElement(CardSection, null,
                React.createElement(Input, { secureTextEntry: true, placeholder: 'Password', value: this.props.password, onChangeText: value => this
                        .props
                        .loginUpdate({ prop: 'password', value }) })),
            React.createElement(Text, { style: styles.errorTextStyle }, this.props.error),
            React.createElement(CardSection, null,
                React.createElement(View, { style: styles.loginButtons },
                    this.renderButton(),
                    React.createElement(Button, { onPress: () => {
                            Actions.register();
                        } }, "Register"))),
            React.createElement(Link, { onPress: () => {
                    Actions.forget();
                } },
                React.createElement(Text, { style: styles.forgetPassword }, "Forget Password"))));
    }
}
const mapStateToProps = (state) => {
    const { email, password, loading, error } = state.auth;
    return { email, password, loading, error };
};
export default connect(mapStateToProps, { loginUpdate, loginUser })(Login);
const styles = {
    loginLable: {
        fontSize: 12,
        margin: 10,
        color: '#000000',
        textAlign: 'center'
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    loginButtons: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-around'
    },
    forgetPassword: {
        fontSize: 13,
        margin: 10,
        color: '#229EB6',
        textAlign: 'left'
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
//# sourceMappingURL=Login.js.map