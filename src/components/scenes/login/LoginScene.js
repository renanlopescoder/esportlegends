import React, { Component } from 'react'
import { View, KeyboardAvoidingView, ActivityIndicator, StyleSheet, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'

import UserStore from 'stores/UserStore'
import { Spinner } from 'components/atoms'
import { LoginLogo } from 'components/molecules'
import { LoginForm } from 'components/organisms'

import styles from './styles'


class LoginScene extends Component {
  constructor() {
    super()
    this.state = {
      loading: false
    }
  }

  redirectUser = () =>{
    Actions.home()
    this.setState({loading: false})
  }

  loginErrorAlert = () => {
    this.setState({loading: false})
    Alert.alert(
      'Falha no Login',
      'Login ou senha incorretos',
      [
        {text: 'Tentar Novamente', onPress: () => console.log('Login try again')},
      ],
      { cancelable: false }
    )
  }

  componentDidMount(){
    UserStore.on("requestLogin", () => {
      this.setState({loading: true})
    })
    UserStore.on("loginSuccess", () => {
      this.redirectUser()
    })
    UserStore.on("loginError", () => {
        this.loginErrorAlert()
    })
  }

  // this.authSubscription = auth.onAuthStateChanged((user) => {
  //   if (user) return this.redirectUser()

  //   this.setState({loading: false})
  // })

  // componentWillUnmount() {
  //   this.authSubscription()
  // }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Spinner loading={this.state.loading} />
        <LoginLogo />
        <LoginForm />
      </KeyboardAvoidingView>
    )
  }
}

export default LoginScene
