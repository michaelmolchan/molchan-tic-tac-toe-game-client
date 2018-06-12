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
  '', '', '',
  '', '', '',
  '', '', ''
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
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// Checks the gameboard for a win after each turn
const checkForWin = function () {
  for (i = 0; i < winCombinations.length; i++) {
    if (winCombinations[i] === gameboard) {
      console.log('We have a winner!')
    } else {
      console.log('No winner yet. Keep playing...')
    }
  }
}

// Fills cell with 'X' or 'O' depending on whose turn it is, then alternates turn.
const onClickBoard = function (event) {
  event.preventDefault()
  console.log('You clicked on ', event.target.id)
  if (playerTurn === 'X') {
    // check to see if the cell has a specific class
    if (!$(this).hasClass('square-o')) {
      $(this).addClass('square-x')
      playerTurn = 'O'
    } else {
      console.log('This cell has been selected')
    }
    console.log(playerTurn)
  } else if (playerTurn === 'O') {
    if (!$(this).hasClass('square-x')) {
      $(this).addClass('square-o')
      playerTurn = 'X'
    } else {
      console.log('This cell has been selected')
    }
    console.log(playerTurn)
  }
}

// Resets the gameboard
const resetBoard = function (event) {
  event.preventDefault()
  playerTurn = 'X'
  $('.square').removeClass('square-x')
  $('.square').removeClass('square-o')
}

// Clears the scoreboard
const clearScore = function () {
  score = {
    'X': 0,
    'O': 0
  }
  console.log(score)
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
  $('#reset-board').on('click', resetBoard)
  $('#clear-score').on('click', clearScore)
})
