import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { userFetchById } from '../actions';
import { CardSection, Spinner } from './common';
class Team extends Component {
    componentDidMount() {
        this
            .props
            .userFetchById(this.props.userId);
    }
    renderContain() {
        if (this.props.user) {
            return React.createElement(View, null,
                React.createElement(Text, null, this.props.user.name),
                React.createElement(Text, null, this.props.user.email));
        }
        return (React.createElement(Spinner, null));
    }
    render() {
        return (React.createElement(CardSection, null,
            React.createElement(View, null, this.renderContain())));
    }
}
const mapStateToProps = (state) => {
    const { user } = state.auth;
    return { user };
};
export default connect(mapStateToProps, { userFetchById })(Team);
//# sourceMappingURL=Team.js.map