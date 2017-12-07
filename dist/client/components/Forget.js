import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { loginUpdate, loginUser } from '../actions';
import { LoginWallpaper, CardSection, Input, Button, Spinner } from './common';
class Forget extends Component {
    onButtonPress() {
        const { email } = this.props;
        this
            .props
            .loginUser({ email });
    }
    renderButton() {
        if (this.props.loading) {
            return React.createElement(Spinner, null);
        }
        return (React.createElement(Button, { bgColor: '#000000', onPress: this
                .onButtonPress
                .bind(this) }, "Reset Password"));
    }
    render() {
        return (React.createElement(LoginWallpaper, null,
            React.createElement(Text, { style: styles.loginLable }, "Reset Password"),
            React.createElement(CardSection, null,
                React.createElement(Input, { placeholder: 'Email', value: this.props.email, onChangeText: value => this
                        .props
                        .loginUpdate({ prop: 'email', value }) })),
            React.createElement(CardSection, null,
                React.createElement(View, { style: styles.loginButtons },
                    this.renderButton(),
                    React.createElement(Button, { onPress: () => {
                            Actions.login();
                        } }, "Login")))));
    }
}
const mapStateToProps = (state) => {
    const { email, loading } = state.auth;
    return { email, loading };
};
export default connect(mapStateToProps, { loginUpdate, loginUser })(Forget);
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
    }
};
//# sourceMappingURL=Forget.js.map