import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native'
import { SocialIcon, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { FormInput } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

import * as UserActions from 'actions/UserActions'

import styles from './styles'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }

  submit = () => {
    const { email, password } = this.state
    UserActions.signInWithEmail(email, password)
  }

  signInWithFacebook = () => {
    UserActions.signInWithFacebook()
  }

  emailInput = () => (
    <TextInput style={styles.input}
      placeholder='Email'
      placeholderTextColor='rgba(255,255,255,0.5)'
      returnKeyType='next'
      onSubmitEditing={() => this.passwordInputRef.focus()}
      keyboardType='email-address'
      autoCapitalize='none'
      autoCorrect={false}
      onChangeText={text => this.setState({ email: text })}
      underlineColorAndroid="transparent"
      selectionColor="#fff"
    />
  )

  passwordInput = () => (
    <TextInput style={styles.input}
      placeholder='Password'
      secureTextEntry
      returnKeyType='go'
      placeholderTextColor='rgba(255,255,255,0.5)'
      ref={input => this.passwordInputRef = input}
      onChangeText={text => this.setState({password: text })}
      underlineColorAndroid="transparent"
      selectionColor="#fff"
    />
  )

  render(){
    return (
      <View style={styles.formContainer}>
        <StatusBar barStyle='light-content'/>
        {this.emailInput()}
        {this.passwordInput()}
        <Button raised icon={{name: 'mail'}} title='Sign In'
          onPress={() => this.submit()}
          backgroundColor='#039BE5'
        />
        <SocialIcon button type='facebook'
          title='Sign In With Facebook'
          onPress={() => this.signInWithFacebook()}
        />
      </View>
    )
  }
}

export default LoginForm
