import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { loginUpdate, conformUser } from "../actions";
import { LoginWallpaper, CardSection, Input, Button, Spinner } from "./common";

export interface Props {
  confirmation;
  loading;
  loginUpdate;
  conformUser;
}
export interface State {}

class Conform extends Component<Props, State> {
  public onButtonPress() {
    const { confirmation } = this.props;
    this.props.conformUser({ confirmation });
  }

  public renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <Button bgColor={"#000000"} onPress={this.onButtonPress.bind(this)}>
        Conform
      </Button>
    );
  }
  render() {
    return (
      <LoginWallpaper>
        <Text style={styles.loginLable}>Conform User</Text>

        <CardSection>
          <Input
            placeholder="Conform Code"
            value={this.props.confirmation}
            onChangeText={value =>
              this.props.loginUpdate({ prop: "confirmation", value })
            }
          />
        </CardSection>

        <CardSection>
          <View style={styles.loginButtons}>{this.renderButton()}</View>
        </CardSection>
      </LoginWallpaper>
    );
  }
}
const mapStateToProps = state => {
  const { confirmation, loading } = state.auth;
  return { confirmation, loading };
};

export default connect(mapStateToProps, { loginUpdate, conformUser })(Conform);
const styles: any = {
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
