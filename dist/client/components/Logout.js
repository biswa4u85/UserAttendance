import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner } from './common';
import { logOut } from '../actions';
class Logout extends Component {
    componentDidMount() {
        this
            .props
            .logOut();
    }
    render() {
        return React.createElement(Spinner, null);
    }
}
const mapStateToProps = (state) => {
    return state.auth;
};
export default connect(mapStateToProps, { logOut })(Logout);
//# sourceMappingURL=Logout.js.map