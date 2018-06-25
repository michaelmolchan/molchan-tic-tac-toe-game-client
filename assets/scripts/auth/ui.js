'use strict'

const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  $('#signUpModal').modal('hide')
  $('#sign-up-message').hide()
  $('#sign-in-message').show()
  $('#sign-up-form')[0].reset()
  $('#sign-up-error').hide()
  $('#sign-out-success-message').hide()
}

const signUpError = function (signUpError) {
  $('#sign-up-error').show()
  $('#sign-up-form')[0].reset()
  $('#sign-out-success-message').hide()
}

const signInSuccess = function (signInResponse) {
  store.user = signInResponse.user
  $('#signInModal').modal('hide')
  $('.sign-in').hide()
  $('.start-game').show()
  $('.nav-sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#player-email').html(store.user.email)
  $('#sign-out-success-message').hide()
  $('#sign-in-error').hide()
  $('#sign-up-error').hide()
  $('#sign-in-success-message').show()
}

const signInError = function (signInError) {
  $('#sign-in-error').show()
  $('#sign-in-form')[0].reset()
  $('#sign-out-success-message').hide()
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('#change-password-form')[0].reset()
  $('#sign-in-success-message').hide()
  $('#change-pw-error').hide()
  $('#change-pw-success-message').show()
}

const changePasswordError = function (changePasswordError) {
  $('#change-pw-success-message').hide()
  $('#change-pw-error').show()
  $('#change-password-form')[0].reset()
}

const signOutSuccess = function (signOutResponse) {
  delete store.user
  $('.game').hide()
  $('#sign-up-message').show()
  $('#sign-out-success-message').show()
  $('.sign-in').show()
  $('.start-game').hide()
  $('.nav-sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-in-message').hide()
  $('#sign-in-form')[0].reset()
  $('#change-pw-error').hide()
  $('#change-pw-success-message').hide()
}

const signOutError = function (signOutError) {
  // console.log('something went wrong. Here\'s your error: ', signOutError)
}

const createNewGameSuccess = function (createNewGameResponse) {
  store.game = createNewGameResponse.game
  $('.game').show()
  $('.start-game').hide()
  $('#game-info').hide()
  $('#change-pw-error').hide()
  $('#change-pw-success-message').hide()
}

const createNewGameError = function (createNewGameError) {
  // console.log('something went wrong. Here\'s your error: ', createNewGameError)
}

const getGameInfoSuccess = function (getGameInfoSuccess) {
  $('#game-info').show()
  $('#game-info').html(`Player One ID: ${getGameInfoSuccess.game.player_x.id}<br>Game ID: ${getGameInfoSuccess.game.id}<br>Signed In As: ${getGameInfoSuccess.game.player_x.email}`)
}

const getGameInfoError = function (getGameInfoError) {
  // console.log('something went wrong. Here\'s your error: ', getGameInfoError)
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
  createNewGameError,
  getGameInfoSuccess,
  getGameInfoError
}
