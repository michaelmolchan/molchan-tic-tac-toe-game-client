'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// const themeStyles = require('../styles/theme.scss')

// use require without a reference to ensure a file is bundled
// require('./example')

// Keeps track of the score
let score = {
  'X': 0,
  'O': 0
}

// Assigns 'X' and 'O' to players
const playerOne = 'X'

const playerTwo = 'O'

// Represents whose turn it is
let turn = 'X'

// Represents an empty Gameboard
const gameboard = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0
]

// const winCombinations = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]

const onClickBoard = function (event) {
  console.log('onClickBoard ran', event.target.id)
  const boxId = event.target.id
  console.log(boxId)
  if (turn === 'X') {
    $(this).toggleClass('square-x')
  } else {
    $(this).toggleClass('square-o')
  }
  // gameboard[0] = 'X'
}

$(() => {
  // your JS code goes here
  // $('#someIdOfTheThingImOn').on('action, callback')
  $('#add-player-form').on('submit', authEvents.onAddPlayer)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#box-0').on('click', onClickBoard)
  $('#box-1').on('click', onClickBoard)
  $('#box-2').on('click', onClickBoard)
  $('#box-3').on('click', onClickBoard)
  $('#box-4').on('click', onClickBoard)
  $('#box-5').on('click', onClickBoard)
  $('#box-6').on('click', onClickBoard)
  $('#box-7').on('click', onClickBoard)
  $('#box-8').on('click', onClickBoard)
})
