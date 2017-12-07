import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {userFetchById} from '../actions'
import {CardSection, Spinner} from './common'

export interface Props {
    user,
    userId,
    userFetchById
}
export interface State {}

class Team extends Component < Props,
State > {

    componentDidMount() {
        this
            .props
            .userFetchById(this.props.userId)
    }

    public renderContain() {
        if (this.props.user) {
            return <View>
                <Text>{this.props.user.name}</Text>
                <Text>{this.props.user.email}</Text>
            </View>
        }
        return (<Spinner/>)
    }

    render() {
        return (
            <CardSection>
                <View>
                    {this.renderContain()}
                </View>

            </CardSection>

        )
    }
}
const mapStateToProps = (state) => {
    const {user} = state.auth
    return {user}
}

export default connect(mapStateToProps, {userFetchById})(Team)