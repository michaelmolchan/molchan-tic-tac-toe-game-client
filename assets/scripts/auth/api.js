'use strict'
const store = require('../store')
const config = require('../config')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'sign-in',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + 'change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + 'sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createNewGame = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (index, value, over) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + 'games/' + store.game.id,
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getGameInfo = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + 'games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createNewGame,
  updateGame,
  getGameInfo
}
