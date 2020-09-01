let scores, roundScore, currentPlayer, showDice, wineScore

scores = [0, 0]
roundScore = 0
currentPlayer = 0
wineScore = 10

showDice = document.querySelector('.dice')
showDice.style.display = 'none'

document.querySelector('#score-0').textContent = '0'
document.querySelector('#score-1').textContent = '0'
document.querySelector('#current-0').textContent = '0'
document.querySelector('#current-1').textContent = '0'

document.querySelector('.btn-roll').addEventListener('click', () => {
    // 1. generate random number
    let dice = Math.floor(Math.random() * 6) + 1

    // 2. display results
    showDice.style.display = 'block'
    showDice.src = './img/dice-' + dice + '.png'

    // 3. update round score if number is not 1
    if (dice !== 1) {
      roundScore += dice
      document.querySelector('#current-' + currentPlayer).textContent = roundScore
    }
    // turn to next player
    else nextPlayer()
  }
)

document.querySelector('.btn-hold').addEventListener('click', () => {
  // add current score to global score
  scores[currentPlayer] += roundScore

  // update the ui
  document.querySelector('#score-' + currentPlayer).textContent = scores[currentPlayer]

  // check the winner
  if (scores[currentPlayer] >= wineScore) {
    document.querySelector('#name-' + currentPlayer).textContent = 'Winner !!'
    document.querySelector('.player-'+currentPlayer+'-panel').classList.remove('active')
    document.querySelector('.player-'+currentPlayer+'-panel').classList.add('winner')
    // document.querySelector('.btn-roll').setAttribute("disabled", true)
    // document.querySelector('.btn-hold').setAttribute("disabled", true)

    showDice.style.display = 'none'
  }

  // turn to next player
  else nextPlayer()

})
