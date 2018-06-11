'use strict'

const store = require('../store')

const addPlayerSuccess = function (createUserResponse) {
  console.log('Player Added! ', createUserResponse)
}

const addPlayerError = function (error) {
  console.log('There was an error adding a player: ', error)
}

const signInSuccess = function (response) {
  console.log('response is ', response)
  store.user = response.user
}

const signInError = function (error) {
  console.log('Error in sign in is ', error)
}

const changePasswordSuccess = function (changePasswordResponse) {
  console.log('changePasswordResponse is ', changePasswordResponse)
}

const changePasswordError = function (error) {
  console.log('Error in change password is ', error)
}

const signOutSuccess = function (response) {
  console.log('you were successfully signed out')
  delete store.user
  console.log('store after sign out is ', store)
}

const signOutError = function (error) {
  console.log('something went wrong. Here\'s your error: ', error)
}

module.exports = {
  addPlayerSuccess,
  addPlayerError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordError,
  signOutSuccess,
  signOutError
}
