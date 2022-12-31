import {charData} from './data.js'
import Character from './Character.js'

const marine = new Character(charData[0]);
const spaceWorm = new Character(charData[1]);

//function to render out characters with constructor fn method

function render() {
    document.getElementById(marine.elementId).innerHTML = marine.getCharacterHtml();
    document.getElementById(spaceWorm.elementId).innerHTML = spaceWorm.getCharacterHtml();
}

render();