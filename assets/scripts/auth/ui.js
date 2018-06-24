'use strict'

const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  console.log('Player Added! ', signUpResponse)
  $('#signUpModal').modal('hide')
  $('#sign-up-message').hide()
  $('#sign-in-message').show()
  $('#sign-up-form')[0].reset()
  $('#sign-up-error').hide()
}

const signUpError = function (signUpError) {
  console.log('There was an error adding a player: ', signUpError)
  $('#sign-up-error').show()
  $('#sign-up-form')[0].reset()
}

const signInSuccess = function (signInResponse) {
  console.log('response is ', signInResponse)
  store.user = signInResponse.user
  $('#signInModal').modal('hide')
  $('.sign-in').hide()
  $('.start-game').show()
  $('.nav-sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
}

const signInError = function (signInError) {
  console.log('Error in sign in is ', signInError)
  $('#sign-in-error').show()
  $('#sign-in-form')[0].reset()
}

const changePasswordSuccess = function (changePasswordResponse) {
  console.log('changePasswordResponse is ', changePasswordResponse)
  $('#changePasswordModal').modal('hide')
  $('#change-password-form')[0].reset()
  $('#sign-in-success-message').hide()
  $('#change-pw-success-message').show()
}

const changePasswordError = function (changePasswordError) {
  console.log('Error in change password is ', changePasswordError)
  $('#change-pw-error').show()
  $('#change-password-form')[0].reset()
}

const signOutSuccess = function (signOutResponse) {
  console.log('you were successfully signed out')
  delete store.user
  console.log('store after sign out is ', store)
  location.reload()
  $('#sign-out-success-message').show()
}

const signOutError = function (signOutError) {
  console.log('something went wrong. Here\'s your error: ', signOutError)
}

const createNewGameSuccess = function (createNewGameResponse) {
  console.log('response is ', createNewGameResponse)
  store.game = createNewGameResponse.game
  $('.game').show()
  $('.start-game').hide()
}

const createNewGameError = function (createNewGameError) {
  console.log('something went wrong. Here\'s your error: ', createNewGameError)
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordError,
  signOutSuccess,
  signOutError,
  createNewGameSuccess,
  createNewGameError
}
