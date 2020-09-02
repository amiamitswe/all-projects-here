initFunc()

document.querySelector('.btn-roll').addEventListener('click', () => {
    if (isGamePlaying) {
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
  }
)

document.querySelector('.btn-hold').addEventListener('click', () => {
  if (isGamePlaying) {
    // add current score to global score
    scores[currentPlayer] += roundScore

    // update the ui
    document.querySelector('#score-' + currentPlayer).textContent = scores[currentPlayer]

    // check the winner
    if (scores[currentPlayer] >= wineScore) {
      document.querySelector('#name-' + currentPlayer).textContent = 'Winner !!'
      document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active')
      document.querySelector('.player-' + currentPlayer + '-panel').classList.add('winner')
      document.querySelector('.btn-roll').setAttribute('disabled', true)
      document.querySelector('.btn-hold').setAttribute('disabled', true)
      document.querySelector('.btn-score-limit').setAttribute('disabled', true)
      document.querySelector('#wineScore').setAttribute('disabled', true)

      showDice.style.display = 'none'
      isGamePlaying = false
    }

    // turn to next player
    else nextPlayer()
  }
})

document.querySelector('.btn-score-limit').addEventListener('click', () => {
  // get input value
  let scoreLimit = document.querySelector('#wineScore').value

  // check number
  if (isNaN(scoreLimit)) {
    alert('Please Give number')
    document.querySelector('#wineScore').value = ''
  } else {
    // set minimum value 10
    if (scoreLimit < 10) alert('provide number greater then 10')
    else {
      // set scoreLimit to ui
      wineScore = scoreLimit
      document.querySelector('#wineScore-view').textContent = wineScore
    }
  }
})

// change player name
document.querySelector('#name-0').addEventListener('click', () => {
  if(isGamePlaying) {
    if (nameCount1 >= 0 && nameCount1 < 2) {
      newName = prompt('Give your name')
      newName.length === 0 ? document.querySelector('#name-0').textContent = 'Player 1' : document.querySelector('#name-0').textContent = newName
      nameCount1 += 1
    } else alert('you have tried too much')
  }
})

document.querySelector('#name-1').addEventListener('click', () => {
  if(isGamePlaying) {
    if (nameCount2 >= 0 && nameCount2 < 2) {
      newName = prompt('Give your name')
      newName.length === 0 ? document.querySelector('#name-1').textContent = 'Player 2' : document.querySelector('#name-1').textContent = newName
      nameCount2 += 1
    } else alert('you have tried too much')
  }
})

document.querySelector('.btn-new').addEventListener('click', initFunc)