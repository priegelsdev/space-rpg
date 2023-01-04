import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js'

// constructor function as template to create multiple characters from

const getPercentage = (remainingHealth, maximumHealth) => 
    100 * remainingHealth / maximumHealth;

function Character(data) {
    Object.assign(this, data);
    
    // display placeholder dice on initial page load

    this.diceArray = getDicePlaceholderHtml(this.diceCount);

    // setting up max health property for further use
    
    this.maxHealth = this.health  

    // method to render dice 

    this.getDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        this.diceArray = this.currentDiceScore.map(num => `<div class="dice">${num}</div>`).join('');
    }
    
    // method when character takes damage

    this.takeDamage = function(attackScoreArray) {
        const attackScore = attackScoreArray.reduce((a, b) => a + b); 
        this.health -= attackScore;

        if (this.health <= 0) {
            this.health = 0;
            this.isAlive = false;
        }

        console.log(getPercentage(this.health, this.maxHealth))
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