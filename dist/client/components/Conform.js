import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { loginUpdate, conformUser } from "../actions";
import { LoginWallpaper, CardSection, Input, Button, Spinner } from "./common";
class Conform extends Component {
    onButtonPress() {
        const { confirmation } = this.props;
        this.props.conformUser({ confirmation });
    }
    renderButton() {
        if (this.props.loading) {
            return React.createElement(Spinner, null);
        }
        return (React.createElement(Button, { bgColor: "#000000", onPress: this.onButtonPress.bind(this) }, "Conform"));
    }
    render() {
        return (React.createElement(LoginWallpaper, null,
            React.createElement(Text, { style: styles.loginLable }, "Conform User"),
            React.createElement(CardSection, null,
                React.createElement(Input, { placeholder: "Conform Code", value: this.props.confirmation, onChangeText: value => this.props.loginUpdate({ prop: "confirmation", value }) })),
            React.createElement(CardSection, null,
                React.createElement(View, { style: styles.loginButtons }, this.renderButton()))));
    }
}
const mapStateToProps = state => {
    const { confirmation, loading } = state.auth;
    return { confirmation, loading };
};
export default connect(mapStateToProps, { loginUpdate, conformUser })(Conform);
const styles = {
    loginLable: {
        fontSize: 12,
        margin: 10,
        color: "#000000",
        textAlign: "center"
    },
    socialIcons: {
        flexDirection: "row",
        justifyContent: "center"
    },
    loginButtons: {
        flex: 1,
        flexDirection: "row",
        marginTop: 15,
        justifyContent: "space-around"
    },
    forgetPassword: {
        fontSize: 13,
        margin: 10,
        color: "#229EB6",
        textAlign: "left"
    }
};
//# sourceMappingURL=Conform.js.map