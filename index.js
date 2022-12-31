import {charData} from './data.js'
import Character from './Character.js'

const marine = new Character(charData[0]);
const spaceWorm = new Character(charData[1]);

// event listener
document.querySelector('.attack-btn').addEventListener('click', handleAttack);

// placeholder

function getPlaceholderHtml() {
    const diceArr = document.querySelectorAll('.dice')
    diceArr.forEach(dice => clear(dice)
        )

    function clear(dice) {
        dice.innerHTML = '';
        dice.classList.add('placeholder-dice')
    }

}

// function to  handle attack
function handleAttack() {
    render();
}

//function to render out characters with constructor fn method

function render() {
    document.getElementById(marine.elementId).innerHTML = marine.getCharacterHtml();
    document.getElementById(spaceWorm.elementId).innerHTML = spaceWorm.getCharacterHtml();
}

render();
getPlaceholderHtml();
console.log(document.querySelector('.dice'))