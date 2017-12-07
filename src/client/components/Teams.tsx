import _ from 'lodash'
import React, {Component} from 'react'
import {View, Text, ListView} from 'react-native'
import {connect} from 'react-redux'
import {ListItem} from './common'
import {usersFetch} from '../actions'
import {Actions} from 'react-native-router-flux'

export interface Props {
  loading,
  users,
  usersFetch
}
export interface State {
  dataSource
}

class Teams extends Component < Props,
State > {

  componentDidMount() {
    this
      .props
      .usersFetch()
  }

  renderRow(data) {
    return <ListItem
      onPress={() => {
      Actions.team({title: data.name, userId: data.uid})
    }}
      data={data}/>
  }

  public renderView() {
    if (this.props.users.length > 0) {

      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })

      this.state = {
        dataSource: ds.cloneWithRows(this.props.users)
      }

      return <ListView dataSource={this.state.dataSource} renderRow={this.renderRow}/>
    }

    return <Text>No Data</Text>
  }

  render() {
    return (
      <View>
        {this.renderView()}
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  const users = _.map(state.auth.users, (val, uid) => {
    return {
      ...val,
      uid
    }
  })
  return {users}
}

export default connect(mapStateToProps, {usersFetch})(Teams)