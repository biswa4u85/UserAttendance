import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import {loginUpdate, loginUser} from '../actions'
import {
  LoginWallpaper,
  CardSection,
  Input,
  Button,
  Link,
  Spinner
} from './common'

export interface Props {
  email,
  password,
  loading,
  error,
  loginUpdate,
  loginUser
}
export interface State {}

class Login extends Component < Props,
State > {

  public onButtonPress() {
    const {email, password} = this.props

    this
      .props
      .loginUser({email, password})
  }

  public renderButton() {
    if (this.props.loading) {
      return <Spinner/>
    }

    return (
      <Button
        bgColor={'#000000'}
        onPress={this
        .onButtonPress
        .bind(this)}>
        Login
      </Button>
    )

  }
  render() {
    return (
      <LoginWallpaper>

        <Text style={styles.loginLable}>Login with</Text>

        <CardSection>
          <Input
            placeholder='Email'
            value={this.props.email}
            onChangeText={value => this
            .props
            .loginUpdate({prop: 'email', value})}/>
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder='Password'
            value={this.props.password}
            onChangeText={value => this
            .props
            .loginUpdate({prop: 'password', value})}/>
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          <View style={styles.loginButtons}>
            {this.renderButton()}
            <Button onPress={() => {
              Actions.register()
            }}>
              Register
            </Button>
          </View>
        </CardSection>

        <Link onPress={() => {
          Actions.forget()
        }}>
          <Text style={styles.forgetPassword}>Forget Password</Text>
        </Link>

      </LoginWallpaper>
    )
  }
}
const mapStateToProps = (state) => {
  const {email, password, loading, error} = state.auth
  return {email, password, loading, error}
}

export default connect(mapStateToProps, {loginUpdate, loginUser})(Login)
const styles : any = {
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
}