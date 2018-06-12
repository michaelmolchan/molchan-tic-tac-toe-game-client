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

// Gameboard winning combinations
const winCombos = function () {
  return [
    [gameboard[0], gameboard[1], gameboard[2]],
    [gameboard[3], gameboard[4], gameboard[5]],
    [gameboard[6], gameboard[7], gameboard[8]],
    [gameboard[0], gameboard[3], gameboard[6]],
    [gameboard[1], gameboard[4], gameboard[7]],
    [gameboard[2], gameboard[5], gameboard[8]],
    [gameboard[0], gameboard[4], gameboard[8]],
    [gameboard[2], gameboard[4], gameboard[6]]
  ]
}
// Checks the gameboard for a win after each turn
const checkForWin = function () {
  let i
  for (i = 0; i < winCombos().length; i++) {
    if (winCombos()[i].join() === 'X,X,X') {
      console.log('Player One Wins!')
    } else if (winCombos()[i].join() === 'O,O,O') {
      console.log('Player Two Wins!')
    } else {}
  }
}

const onClickBoard = function (event) {
  event.preventDefault()
  console.log('You clicked on ', event.target.id)
  if (playerTurn === 'X') {
    // check to see if the cell has empty cell class (.square), if so replace with class '.square-x'
    if ($(this).hasClass('square')) {
      $(this).removeClass('square')
      $(this).addClass('square-x')
      // Add 'X' to the gameboard array index that represents the cell that was clicked
      gameboard[event.target.id] = playerTurn
      console.log(gameboard)
      // Check the updated gameboard for win combos
      checkForWin()
      playerTurn = 'O'
    } else {
      console.log('This cell has been selected')
    }
    console.log(playerTurn)
  } else if (playerTurn === 'O') {
    // check to see if the cell has empty cell class (.square), if so replace with class '.square-o'
    if ($(this).hasClass('square')) {
      $(this).removeClass('square')
      $(this).addClass('square-o')
      // Add 'O' to the gameboard array index that represents the cell that was clicked
      gameboard[event.target.id] = playerTurn
      console.log(gameboard)
      // Check the updated gameboard for win combos
      checkForWin()
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
  $('.square-x').addClass('square')
  $('.square').removeClass('square-x')
  $('.square-o').addClass('square')
  $('.square').removeClass('square-o')
  playerTurn = 'X'
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
  $('#0').on('click', onClickBoard)
  $('#1').on('click', onClickBoard)
  $('#2').on('click', onClickBoard)
  $('#3').on('click', onClickBoard)
  $('#4').on('click', onClickBoard)
  $('#5').on('click', onClickBoard)
  $('#6').on('click', onClickBoard)
  $('#7').on('click', onClickBoard)
  $('#8').on('click', onClickBoard)
  $('#reset-board').on('click', resetBoard)
  $('#clear-score').on('click', clearScore)
})
