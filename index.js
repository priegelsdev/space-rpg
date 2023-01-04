import {charData} from './data.js'
import Character from './Character.js'

let monsterArray = ['spaceworm', 'mutant', 'alien']

const marine = new Character(charData.hero);
let monster = getNewMonster();
const spaceWorm = new Character(charData.spaceworm);

// event listener
document.querySelector('.attack-btn').addEventListener('click', handleAttack);

// function to get a new monster from array to fight against

function getNewMonster() {
  const newMonster = charData[monsterArray.shift()];
  return newMonster ? new Character(newMonster) : {}
} 


// function to  handle attack

function handleAttack() {

    marine.getDiceHtml();
    monster.getDiceHtml();
    marine.takeDamage(monster.currentDiceScore);    
    monster.takeDamage(marine.currentDiceScore);
    render();

    if (!marine.isAlive) {
        endGame();
    } else if (!monster.isAlive) {
        if (monsterArray.length > 0) {
          monster = getNewMonster();
          render();
        } else {
          endGame();
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
}

render();
