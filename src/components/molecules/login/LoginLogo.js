import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'

class LoginLogo extends Component {
  render(){
    return (
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('assets/images/logo2.png')}/>
        <Text style={styles.title}>eSport Legends</Text>
      </View>
    )
  }
}

export default LoginLogo
