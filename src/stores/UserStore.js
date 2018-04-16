import axios from 'axios'
import { EventEmitter } from "events"
import { Actions } from 'react-native-router-flux'
import { Alert } from 'react-native'

import { FACEBOOK_PERMISSIONS } from 'config/constants'
import firebase from 'config/firebase'
import Auth from 'config/facebook'
import { FBLoginManager } from 'react-native-facebook-login'

import dispatcher from "../dispatcher"

class UserStore extends EventEmitter {
  constructor() {
    super()
    this.user = {}
  }

  setUserStore(user) {
    this.user = user
    this.emit("loginSuccess")
  }

  facebookLogin = (permissions) => {
    return new Promise((resolve, reject) => {
      FBLoginManager.loginWithPermissions(permissions || ['email'], (error, data) => {
        if (!error) {
          this.setUserStore(JSON.parse(data.profile))
          resolve(data.credentials.token)
        } else {
          reject(error)
        }
      })
    })
  }

  facebookLogout = () => {
    return new Promise((resolve, reject) => {
      FBLoginManager.logout((error, data) => {
        if (!error) {
          resolve(true)
        } else {
          reject(error)
        }
      })
    })
  }

  async signInWithEmail(email, password) {
    this.emit("requestLogin")
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password)
      this.setUserStore(user)
    } catch (error) {
      this.emit("loginError")
    }
  }

  signInWithFacebook() {
    this.facebookLogin(FACEBOOK_PERMISSIONS)
      .then((token) => {
        firebase.auth()
          .signInAndRetrieveDataWithCredential(firebase.auth.FacebookAuthProvider.credential(token))
      })
      .catch((err) => {
          this.emit("loginError")
          console.log(err)
        }
      )
    }

  handleActions(action) {
    switch(action.type) {
      case "SIGNIN_WITH_EMAIL":
        this.signInWithEmail(action.email, action.password)
        break

      case "SIGNIN_WITH_FACEBOOK":
        this.signInWithFacebook()
        break

      // case "UPDATE_USER_FROM_LOCAL_STORAGE":
      //   this.updateUserFromLocalStorage()
      //   break

      // case "CLEAR_USER_IN_LOCAL_STORAGE":
      //   this.clearUserInLocalStorage()
      //   break
    }
  }
}

const userStore = new UserStore
dispatcher.register(userStore.handleActions.bind(userStore))

export default userStore
