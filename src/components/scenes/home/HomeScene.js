import React, { Component } from 'react'
import { ListView, Text, StatusBar, TouchableHighlight, View } from 'react-native'
import { Header, Avatar } from 'react-native-elements'
import UserStore from 'stores/UserStore'
import styles from './styles'

class HomeScene extends Component {
  constructor() {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      investmentsDataSource: ds
    }
    this.renderRow = this.renderRow.bind(this)
    this.pressRow = this.pressRow.bind(this)
  }

  pressRow(investment){
    console.log(investment)
  }

  renderRow(investment){
    return (
      <TouchableHighlight onPress={() => {
        this.pressRow(investment)
      }}>
        <View style={styles.container}>
          <Text style={styles.liText}>
            {investment.broker}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }

//   <StatusBar key='StatusBar' barStyle='light-content' />,
//   <ListView key='ListView'
//     dataSource={this.state.investmentsDataSource}
//     renderRow={this.renderRow}
//   />
// ]

  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Tournaments', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Avatar
          medium
          source={{uri: UserStore.user.picture.data.url}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
      </View>
    )
  }
}

export default HomeScene
