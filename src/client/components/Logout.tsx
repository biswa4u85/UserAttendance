import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Spinner} from './common'
import {logOut} from '../actions'

export interface Props {
    logOut
}

class Logout extends Component < Props > {

    componentDidMount() {
        this
            .props
            .logOut()
    }

    render() {
        return <Spinner/>
    }
}

const mapStateToProps = (state) => {
    return state.auth
}

export default connect(mapStateToProps, {logOut})(Logout)