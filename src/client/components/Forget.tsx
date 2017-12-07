import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import {loginUpdate, loginUser} from '../actions'
import {LoginWallpaper, CardSection, Input, Button, Spinner} from './common'

export interface Props {
    email,
    password,
    loading,
    loginUpdate,
    loginUser
}
export interface State {}

class Forget extends Component < Props,
State > {

    public onButtonPress() {
        const {email} = this.props

        this
            .props
            .loginUser({email})
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
                Reset Password
            </Button>
        )

    }
    render() {
        return (
            <LoginWallpaper>

                <Text style={styles.loginLable}>Reset Password</Text>

                <CardSection>
                    <Input
                        placeholder='Email'
                        value={this.props.email}
                        onChangeText={value => this
                        .props
                        .loginUpdate({prop: 'email', value})}/>
                </CardSection>

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
    const {email, loading} = state.auth
    return {email, loading}
}

export default connect(mapStateToProps, {loginUpdate, loginUser})(Forget)
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
    }
}