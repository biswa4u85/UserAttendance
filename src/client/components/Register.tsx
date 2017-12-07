import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import {userUpdate, userCreate} from '../actions'
import {LoginWallpaper, CardSection, Input, Button, Spinner} from './common'

export interface Props {
    name,
    email,
    password,
    loading,
    error,
    userUpdate,
    userCreate
}
export interface State {}

class Register extends Component < Props,
State > {

    public onButtonPress() {
        const {name, email, password} = this.props

        this
            .props
            .userCreate({name, email, password})
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
                Register
            </Button>
        )

    }
    render() {
        return (
            <LoginWallpaper>

                <Text style={styles.loginLable}>Register</Text>

                <CardSection>
                    <Input
                        placeholder='name'
                        value={this.props.name}
                        onChangeText={value => this
                        .props
                        .userUpdate({prop: 'name', value})}/>
                </CardSection>

                <CardSection>
                    <Input
                        placeholder='email'
                        value={this.props.email}
                        onChangeText={value => this
                        .props
                        .userUpdate({prop: 'email', value})}/>
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder='Password'
                        value={this.props.password}
                        onChangeText={value => this
                        .props
                        .userUpdate({prop: 'password', value})}/>
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    <View style={styles.loginButtons}>
                        {this.renderButton()}
                        <Button
                            onPress={() => {
                            Actions.login()
                        }}>
                            Login
                        </Button>
                    </View>
                </CardSection>
            </LoginWallpaper>
        )
    }
}
const mapStateToProps = (state) => {
    const {name, email, password, loading, error} = state.auth
    return {name, email, password, loading, error}
}

export default connect(mapStateToProps, {userUpdate, userCreate})(Register)
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