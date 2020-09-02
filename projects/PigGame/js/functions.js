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
  showDice2.style.display = 'none'
}

const initFunc = () => {
  scores = [0, 0]
  roundScore = 0
  currentPlayer = 0
  wineScore = 100
  nameCount2 = nameCount1 = 0
  previousScore = 0

  document.querySelector('#wineScore-view').textContent = wineScore
  isGamePlaying = true

  showDice.style.display = 'none'
  showDice2.style.display = 'none'

  document.querySelector('#wineScore').value = wineScore

  document.querySelector('#score-0').textContent = '0'
  document.querySelector('#score-1').textContent = '0'
  document.querySelector('#current-0').textContent = '0'
  document.querySelector('#current-1').textContent = '0'

  document.querySelector('#name-0').textContent = 'Player 1'
  document.querySelector('#name-1').textContent = 'Player 2'

  document.querySelector('.player-0-panel').classList.remove('active')
  document.querySelector('.player-1-panel').classList.remove('active')
  document.querySelector('.player-0-panel').classList.add('active')

  document.querySelector('.player-0-panel').classList.remove('winner')
  document.querySelector('.player-1-panel').classList.remove('winner')

  document.querySelector('.btn-roll').removeAttribute('disabled')
  document.querySelector('.btn-hold').removeAttribute('disabled')
  document.querySelector('.btn-score-limit').removeAttribute('disabled')
  document.querySelector('#wineScore').removeAttribute('disabled')
}