initFunc()

document.querySelector('.btn-roll').addEventListener('click', () => {
    if (isGamePlaying) {

      // 1. generate random number
      let dice = Math.floor(Math.random() * 6) + 1
      let dice2 = Math.floor(Math.random() * 6) + 1

      // console.log(dice + ' -------------- ' + dice2)

      // 2. display results
      showDice.style.display = 'block'
      showDice2.style.display = 'block'
      showDice.src = './img/dice-' + dice + '.png'
      showDice2.src = './img/dice-' + dice2 + '.png'

      // check dice 6 twice at a time if yse then loos total score of that player
      if (previousScore === dice && previousScore === 6) {
        scores[currentPlayer] = 0
        document.querySelector('#score-' + currentPlayer).textContent = '0'
        nextPlayer()
      }

      // 3. update round score if number is not 1
      else if (dice !== 1 && dice2 !== 1) {
        roundScore += dice + dice2
        document.querySelector('#current-' + currentPlayer).textContent = roundScore
      }

      // turn to next player
      else nextPlayer()
      previousScore = dice
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
      showDice2.style.display = 'none'
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

    // set scoreLimit to ui
    else {
      wineScore = scoreLimit
      document.querySelector('#wineScore-view').textContent = wineScore
    }
  }
})

// change player name
document.querySelector('#name-0').addEventListener('click', () => {
  if (isGamePlaying) {
    if (nameCount1 >= 0 && nameCount1 < 2) {
      newName = prompt('Give your name')
      newName.length === 0
        ? document.querySelector('#name-0').textContent = 'Player 1'
        : document.querySelector('#name-0').textContent = newName
      nameCount1 += 1
    } else alert('you have tried too much')
  }
})

document.querySelector('#name-1').addEventListener('click', () => {
  if (isGamePlaying) {
    if (nameCount2 >= 0 && nameCount2 < 2) {
      newName = prompt('Give your name')
      newName.length === 0
        ? document.querySelector('#name-1').textContent = 'Player 2'
        : document.querySelector('#name-1').textContent = newName
      nameCount2 += 1
    } else alert('you have tried too much')
  }
})

// new game start
document.querySelector('.btn-new').addEventListener('click', initFunc)