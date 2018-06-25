'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const authApi = require('./auth/api')
// const themeStyles = require('../styles/theme.scss')

// use require without a reference to ensure a file is bundled
// require('./example')

// Represents whose turn it is. Player One is set to X. Player One starts the game
let playerTurn = 'X'

// Indicates that the game is not over
let gameOver = false

// Represents an empty Gameboard
let gameboard = [
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
      winnerX()
    } else if (winCombos()[i].join() === 'O,O,O') {
      winnerO()
    } else if (gameOver === false) {
      checkForTie()
    }
  }
}

// Checks the gameboard for a Tie Game
const checkForTie = function () {
  let tie = true
  for (let i = 0; i < gameboard.length; i++) {
    if (gameboard[i] === '') {
      tie = false
    }
  }
  if (tie === true) {
    tieGame()
  }
}

// Provides message that Player One (X) has won the game
const winnerX = function () {
  // Add html to div that says "PLAYER ONE WINS"
  $('.game-result').html('PLAYER ONE WINS!')
  // Indicates that the game is over
  gameOver = true
}

// Provides message that Player Two (O) has won the game
const winnerO = function () {
  // Add html to div that says "PLAYER TWO WINS"
  $('.game-result').html('PLAYER TWO WINS!')
  // Indicates that the game is over
  gameOver = true
}

// Provides message that game is a tie
const tieGame = function () {
  // Add html to div that says "TIE GAME!"
  $('.game-result').html('TIE GAME!')
  // Indicates that the game is over
  gameOver = true
}

// When the board is clicked on by a user
const onClickBoard = function (event) {
  // Displays reset board buttons
  $('#reset-board').show()
  event.preventDefault()
  // if a winner has not been identified, run this code
  if (gameOver === false) {
    if (playerTurn === 'X') {
      // checks to see if the cell has empty cell class (.square), if so replace with class '.square-x'
      if ($(this).hasClass('square')) {
        $(this).removeClass('square')
        $(this).addClass('square-x')
        // Adds 'X' to the gameboard array index that represents the cell that was clicked
        gameboard[event.target.id] = playerTurn
        // Checks the updated gameboard for win combos
        checkForWin()
        authApi.updateGame(event.target.id, playerTurn, gameOver)
        // Switches turns
        playerTurn = 'O'
      } else {}
    } else if (playerTurn === 'O') {
      // checks to see if the cell has empty cell class (.square), if so replace with class '.square-o'
      if ($(this).hasClass('square')) {
        $(this).removeClass('square')
        $(this).addClass('square-o')
        // Adds 'O' to the gameboard array index that represents the cell that was clicked
        gameboard[event.target.id] = playerTurn
        // Checks the updated gameboard for win combos
        checkForWin()
        authApi.updateGame(event.target.id, playerTurn, gameOver)
        // Switches turns
        playerTurn = 'X'
      } else {}
    }
  } else {
    // Notifies the user that the game is over. Click reset board to play again
    $('.game-over-alert').html('&#9757; Click reset board to play again!')
  }
}

// Resets the game
const resetBoard = function (event) {
  event.preventDefault()
  // Clears the board
  $('.square-x').addClass('square')
  $('.square').removeClass('square-x')
  $('.square-o').addClass('square')
  $('.square').removeClass('square-o')
  playerTurn = 'X'
  gameOver = false
  gameboard = [
    '', '', '',
    '', '', '',
    '', '', ''
  ]
  $('.game-over-alert').html('')
  $('.game-result').html('')
}

$(() => {
  // hidden elements on document load
  $(document).ready(function () {
    $('#sign-out').hide()
    $('#change-password').hide()
    $('#reset-board').hide()
    $('.game').hide()
    $('.start-game').hide()
    $('#sign-up-error').hide()
    $('#sign-in-error').hide()
    $('#change-pw-error').hide()
    $('#sign-in-message').hide()
    $('#change-pw-success-message').hide()
    $('#sign-out-success-message').hide()
  })
  // your JS code goes here
  // $('#someIdOfTheThingImOn').on('action, callback')
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#sign-out').on('click', resetBoard)
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
  $('#start-new-game-1').on('click', authEvents.onCreateNewGame)
  $('#start-new-game-2').on('click', authEvents.onCreateNewGame)
  $('#start-new-game-2').on('click', resetBoard)
  $('#reset-board').on('click', authEvents.onCreateNewGame)
  $('#get-game-info').on('click', authEvents.onGetGameInfo)
})
