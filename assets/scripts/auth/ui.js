'use strict'

const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  console.log('Player Added! ', signUpResponse)
}

const signUpError = function (signUpError) {
  console.log('There was an error adding a player: ', signUpError)
}

const signInSuccess = function (signInResponse) {
  console.log('response is ', signInResponse)
  store.user = signInResponse.user
  $('.nav-sign-in').hide()
  $('.sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('.game').show()
}

const signInError = function (signInError) {
  console.log('Error in sign in is ', signInError)
}

const changePasswordSuccess = function (changePasswordResponse) {
  console.log('changePasswordResponse is ', changePasswordResponse)
}

const changePasswordError = function (changePasswordError) {
  console.log('Error in change password is ', changePasswordError)
}

const signOutSuccess = function (signOutResponse) {
  console.log('you were successfully signed out')
  delete store.user
  console.log('store after sign out is ', store)
}

const signOutError = function (signOutError) {
  console.log('something went wrong. Here\'s your error: ', signOutError)
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordError,
  signOutSuccess,
  signOutError
}
