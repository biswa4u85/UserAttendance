import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { userUpdate, userCreate } from '../actions';
import { LoginWallpaper, CardSection, Input, Button, Spinner } from './common';
class Register extends Component {
    onButtonPress() {
        const { name, email, password } = this.props;
        this
            .props
            .userCreate({ name, email, password });
    }
    renderButton() {
        if (this.props.loading) {
            return React.createElement(Spinner, null);
        }
        return (React.createElement(Button, { bgColor: '#000000', onPress: this
                .onButtonPress
                .bind(this) }, "Register"));
    }
    render() {
        return (React.createElement(LoginWallpaper, null,
            React.createElement(Text, { style: styles.loginLable }, "Register"),
            React.createElement(CardSection, null,
                React.createElement(Input, { placeholder: 'name', value: this.props.name, onChangeText: value => this
                        .props
                        .userUpdate({ prop: 'name', value }) })),
            React.createElement(CardSection, null,
                React.createElement(Input, { placeholder: 'email', value: this.props.email, onChangeText: value => this
                        .props
                        .userUpdate({ prop: 'email', value }) })),
            React.createElement(CardSection, null,
                React.createElement(Input, { secureTextEntry: true, placeholder: 'Password', value: this.props.password, onChangeText: value => this
                        .props
                        .userUpdate({ prop: 'password', value }) })),
            React.createElement(Text, { style: styles.errorTextStyle }, this.props.error),
            React.createElement(CardSection, null,
                React.createElement(View, { style: styles.loginButtons },
                    this.renderButton(),
                    React.createElement(Button, { onPress: () => {
                            Actions.login();
                        } }, "Login")))));
    }
}
const mapStateToProps = (state) => {
    const { name, email, password, loading, error } = state.auth;
    return { name, email, password, loading, error };
};
export default connect(mapStateToProps, { userUpdate, userCreate })(Register);
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
//# sourceMappingURL=Register.js.map