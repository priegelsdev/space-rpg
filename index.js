import {charData} from './data.js';
import Character from './Character.js';
import { getPlaceholderHtml } from './utils.js';

const marine = new Character(charData[0]);
const spaceWorm = new Character(charData[1]);

// event listener
document.querySelector('.attack-btn').addEventListener('click', handleAttack);

// function to  handle attack
function handleAttack() {
    render();

    const diceArr = document.querySelectorAll('.dice')
    let diceTotal = 0;

    diceArr.forEach(dice => countTotal(dice)
        )

    // function to add dice of character to total
        function countTotal(dice) {
 
            if (dice.classList.contains('placeholder-dice')) {
                console.log('test');
            } else {
                const diceFloat = parseFloat(dice.innerText)
                diceTotal += diceFloat; 
                console.log(diceTotal)}
        }   

    console.log(diceTotal)
    spaceWorm.health -= diceTotal;
    console.log(spaceWorm.health)


   
}

//function to render out characters with constructor fn method

function render() {
    document.getElementById(marine.elementId).innerHTML = marine.getCharacterHtml();
    document.getElementById(spaceWorm.elementId).innerHTML = spaceWorm.getCharacterHtml();
}

render();
getPlaceholderHtml();