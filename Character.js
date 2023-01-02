import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js'

// constructor function as template to create multiple characters from

function Character(data) {
    Object.assign(this, data);
    
    // display placeholder dice on initial page load

    this.diceArray = getDicePlaceholderHtml(this.diceCount);

    // method to render dice 

    this.getDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        this.diceArray = this.currentDiceScore.map(num => `<div class="dice">${num}</div>`).join('');
    }
    
    // method when character takes damage

    this.takeDamage = function(attackScoreArray) {
        const attackScore = attackScoreArray.reduce((a, b) => a + b); 
        this.health -= attackScore;
    }

    // method to render character

    this.getCharacterHtml = function() {

        //object destructuring
        const {name, avatar, health, diceCount, diceArray} = this;

        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${diceArray}
                </div>
            </div>
        `
    }
}

export default Character