import {charData} from './data.js'
import Character from './Character.js'

const marine = new Character(charData[0]);
const spaceWorm = new Character(charData[1]);

// event listener
document.querySelector('.attack-btn').addEventListener('click', handleAttack);
document.querySelector('.replay-btn').addEventListener('click', reset);

// function to  handle attack
function handleAttack() {

    marine.getDiceHtml();
    spaceWorm.getDiceHtml();
    marine.takeDamage(spaceWorm.currentDiceScore);    
    spaceWorm.takeDamage(marine.currentDiceScore);
    render();

    if (!marine.isAlive || !spaceWorm.isAlive) {
        endGame();
    }
}

// function to end game 

function endGame() {

    // first use of ternary operator

    const message = !marine.isAlive && !spaceWorm.isAlive ? 'You died. No winner.'
        : !marine.isAlive ? 'You died. The monsters win.'
        : 'You win!'

    document.querySelector('.main').innerHTML = `
        <div class="endscreen">
          <h1>${message}</h1>
        </div>
      `

    document.querySelector('.actions').innerHTML = `
        <button class="replay-btn">Play again</button>
      `
}

// function to reset game

function reset() {
    
}

//function to render out characters with constructor fn method

function render() {
    document.getElementById(marine.elementId).innerHTML = marine.getCharacterHtml();
    document.getElementById(spaceWorm.elementId).innerHTML = spaceWorm.getCharacterHtml();
}

render();
