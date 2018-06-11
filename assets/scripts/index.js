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
let playerTurn = 'X'

// Alternates turn after click
// const alternate = function () {
//   if (playerTurn === 'X') {
//     playerTurn = 'O'
//   } else if (playerTurn === 'O') {
//     playerTurn = 'X'
//   }
// }

// Represents an empty Gameboard
const gameboard = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0
]

// const winCombinations = [
//   ['X', 'X', 'X', 0, 0, 0, 0, 0, 0],
//   ['O', 'O', 'O', 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 'X', 'X', 'X', 0, 0, 0],
//   [0, 0, 0, 'O', 'O', 'O', 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 'X', 'X', 'X'],
//   [0, 0, 0, 0, 0, 0, 'O', 'O', 'O'],
//   ['X', 0, 0, 'X', 0, 0, 'X', 0, 0],
//   ['O', 0, 0, 'O', 0, 0, 'O', 0, 0],
//   [0, 'X', 0, 0, 'X', 0, 0, 'X', 0],
//   [0, 'O', 0, 0, 'O', 0, 0, 'O', 0],
//   [0, 0, 'X', 0, 0, 'X', 0, 0, 'X'],
//   [0, 0, 'O', 0, 0, 'O', 0, 0, 'O'],
//   ['X', 0, 0, 0, 'X', 0, 0, 0, 'X'],
//   ['O', 0, 0, 0, 'O', 0, 0, 0, 'O'],
//   [0, 0, 'X', 0, 'X', 0, 'X', 0, 0],
//   [0, 0, 'O', 0, 'O', 0, 'O', 0, 0]
// ]

// Fills cell with 'X' or 'O' depending on whose turn it is, then alternates turn.
const onClickBoard = function (event) {
  console.log('You clicked on ', event.target.id)
  if (playerTurn === 'X') {
    $(this).addClass('square-x')
    playerTurn = 'O'
    console.log(playerTurn)
  } else if (playerTurn === 'O') {
    $(this).addClass('square-o')
    playerTurn = 'X'
    console.log(playerTurn)
  }
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
