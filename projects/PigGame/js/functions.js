const nextPlayer = () => {
  // change currentPlayer
  currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0
  roundScore = 0

  // set current score to 0
  document.querySelector('#current-0').textContent = '0'
  document.querySelector('#current-1').textContent = '0'

  // toggle the active player
  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')

  // hide dice
  showDice.style.display = 'none'
}