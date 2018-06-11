'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api')
const authUi = require('./ui')

const onAddPlayer = function (event) {
  event.preventDefault()
  console.log('Player was added!')

  const data = getFormFields(event.target)

  authApi.addPlayer(data)
    .then(authUi.addPlayerSuccess)
    .catch(authUi.addPlayerError)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('You have successfully signed in!')

  const data = getFormFields(event.target)

  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('Your password has been changed!')

  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordError)
}

const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

module.exports = {
  onAddPlayer,
  onSignIn,
  onChangePassword,
  onSignOut
}
