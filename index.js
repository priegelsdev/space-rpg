import {charData} from './data.js'
import {getItem} from './utils.js'
import Character from './Character.js'

let monsterArray = ['spaceworm', 'mutant', 'alien']

const marine = new Character(charData.hero);
let monster = getNewMonster();
const spaceWorm = new Character(charData.spaceworm);

// event listener
document.querySelector('.attack-btn').addEventListener('click', function() {
  if (monster.health != 0 && marine.health != 0) {
    handleAttack()
  } 
});

// function to use item depending on what item it is
function useItem(e) {
  if (e.target.src.includes('gun')) { 
    const itemArray = marine.items.filter(item => item.name === 'Plasma gun')
    monster.takeDamage([itemArray[0].damage])

    const found = marine.items.find(item => item.name === 'Plasma gun')
    const index = marine.items.indexOf(found)

    marine.items.splice(index, 1)
  } else {
    const itemArray = marine.items.filter(item => item.name === 'Medkit')
    marine.takeDamage([-itemArray[0].health])

    const found = marine.items.find(item => item.name === 'Medkit')
    const index = marine.items.indexOf(found)

    marine.items.splice(index, 1)
  }
  render();
}

// function to get a new monster from array to fight against

function getNewMonster() {
  const newMonster = charData[monsterArray.shift()];
  return newMonster ? new Character(newMonster) : {}
} 

// function to  handle attack

function handleAttack() {

    marine.setDiceHtml();
    monster.setDiceHtml();
    marine.takeDamage(monster.currentDiceScore);    
    monster.takeDamage(marine.currentDiceScore);
    render();

    if (!marine.isAlive) {
        setTimeout(() => endGame(), 2000);
    } else if (!monster.isAlive) {
        if (monsterArray.length > 0) {
          setTimeout(() => {
            monster = getNewMonster();
              // when getting a new monster, hero gets item
              marine.items.push(getItem())
            render();
          }, 1000)
        } else {
          setTimeout(() => endGame(), 2000);
      }
    } 
}

// function to end game 

function endGame() {

    // first use of ternary operator

    const message = !marine.isAlive && !monster.isAlive ? 'You died. No winner.'
        : !marine.isAlive ? 'You died. The monsters win.'
        : 'You win!'

    document.querySelector('.main').innerHTML = `
        <div class="endscreen">
          <h1>${message}</h1>
        </div>
      `

    // exchange attack btn for replay button and add eventlistener to replay game
      
    document.querySelector('.actions').innerHTML = `
        <button class="replay-btn">Play again</button>
      `

    document.querySelector('.replay-btn').addEventListener('click', reset);
}

// function to reset game

function reset() {
  document.location.reload()
}

//function to render out characters with constructor fn method

function render() {
    document.getElementById('hero').innerHTML = marine.getCharacterHtml();
    document.getElementById('monster').innerHTML = monster.getCharacterHtml();

    // add event listener to newly rendered items
    if (marine.items.length > 0) {
      document.getElementById('0').addEventListener('click', function(e) {
        useItem(e)
      })
      if (marine.items.length > 1) {
        document.getElementById('1').addEventListener('click', function(e) {
          useItem(e)
        })
      }
    }
}

render();

