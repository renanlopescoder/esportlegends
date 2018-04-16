import dispatcher from '../dispatcher'

export function signInWithEmail(email, password) {
  dispatcher.dispatch({
    type: "SIGNIN_WITH_EMAIL",
    email,
    password,
  })
}

export function signInWithFacebook() {
  dispatcher.dispatch({
    type: "SIGNIN_WITH_FACEBOOK",
  })
}
