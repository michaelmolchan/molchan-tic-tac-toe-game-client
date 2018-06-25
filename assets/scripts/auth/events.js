'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api')
const authUi = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInError)
}

const onChangePassword = function (event) {
  event.preventDefault()

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

const onCreateNewGame = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  authApi.createNewGame(data)
    .then(authUi.createNewGameSuccess)
    .catch(authUi.createNewGameError)
}

const onGetGameInfo = function (event) {
  event.preventDefault()
  const info = getFormFields(event.target)
  authApi.getGameInfo(info)
    .then(authUi.getGameInfoSuccess)
    .catch(authUi.getGameInfoError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateNewGame,
  onGetGameInfo
}
