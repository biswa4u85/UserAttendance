import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from './common';
import { usersFetch } from '../actions';
import { Actions } from 'react-native-router-flux';
class Teams extends Component {
    componentDidMount() {
        this
            .props
            .usersFetch();
    }
    renderRow(data) {
        return React.createElement(ListItem, { onPress: () => {
                Actions.team({ title: data.name, userId: data.uid });
            }, data: data });
    }
    renderView() {
        if (this.props.users.length > 0) {
            const ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            });
            this.state = {
                dataSource: ds.cloneWithRows(this.props.users)
            };
            return React.createElement(ListView, { dataSource: this.state.dataSource, renderRow: this.renderRow });
        }
        return React.createElement(Text, null, "No Data");
    }
    render() {
        return (React.createElement(View, null, this.renderView()));
    }
}
const mapStateToProps = (state) => {
    const users = _.map(state.auth.users, (val, uid) => {
        return Object.assign({}, val, { uid });
    });
    return { users };
};
export default connect(mapStateToProps, { usersFetch })(Teams);
//# sourceMappingURL=Teams.js.map