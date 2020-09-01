let scores, roundScore, currentPlayer, showDice

scores = [0, 0]
roundScore = 0
currentPlayer = 0

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
    } else {
      currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0

      document.querySelector('#current-0').textContent = '0'
      document.querySelector('#current-1').textContent = '0'

      document.querySelector('.player-0-panel').classList.toggle('active')
      document.querySelector('.player-1-panel').classList.toggle('active')

      showDice.style.display = 'none'
    }
  }
)

// above add an anonymous function