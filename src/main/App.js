import React, { Component } from 'react'
import { Platform, View, ActivityIndicator } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'

import { LoginScene, HomeScene } from 'components/scenes'

class App extends Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
          <Scene key='login' component={LoginScene} hideNavBar={true} />
          <Scene key='home' component={HomeScene} title='Home' />
        </Scene>
      </Router>
    )
  }
}
// <Scene key='facebookLogin' component={FacebookLoginScene} title='Facebook Login' />

export default App
