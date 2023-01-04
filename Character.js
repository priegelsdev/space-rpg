import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from './utils.js'

// constructor function as template to create multiple characters from

function Character(data) {
    Object.assign(this, data);
    
    // display placeholder dice on initial page load

    this.diceArray = getDicePlaceholderHtml(this.diceCount);

    // setting up max health property for further use
    
    this.maxHealth = this.health  

    // set up health bar

    this.getHealthBar = function() {
      return getPercentage(this.health, this.maxHealth)
    }

    this.getHealthBarCss = function() {
      let bgColor = 'green';

      if (this.getHealthBar() < 26) {
        bgColor = 'red'
      }

      return bgColor;
    }

    // method to render dice 

    this.setDiceHtml = function() {
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
    }

    // method to render character

    this.getCharacterHtml = function() {

        //object destructuring
        const {name, avatar, health, diceCount, diceArray} = this;
        const healthBar = getPercentage(this.health, this.maxHealth);
        const healthBarColor = this.getHealthBarCss();

        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="healthbar" style="width: ${healthBar}%; 
                  background-color: ${healthBarColor}"></div>
                <div class="dice-container">
                    ${diceArray}
                </div>
            </div>
        `
    }
}

export default Character