import {charData} from './data.js'
import Character from './Character.js'

const marine = new Character(charData[0]);
const spaceWorm = new Character(charData[1]);

// event listener
document.querySelector('.attack-btn').addEventListener('click', handleAttack);

// function to  handle attack
function handleAttack() {

    marine.getDiceHtml();
    spaceWorm.getDiceHtml();
    marine.takeDamage(spaceWorm.currentDiceScore);    
    spaceWorm.takeDamage(marine.currentDiceScore);
    render();
}

//function to render out characters with constructor fn method

function render() {
    document.getElementById(marine.elementId).innerHTML = marine.getCharacterHtml();
    document.getElementById(spaceWorm.elementId).innerHTML = spaceWorm.getCharacterHtml();
}

render();
