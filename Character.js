import {getDiceRollArray} from './utils.js'

// constructor function as template to create multiple characters from

function Character(data) {
    Object.assign(this, data);

    // method to render dice 

    this.getDiceHtml = function(diceCount) {
        return getDiceRollArray(diceCount).map(num => `
            <div class="dice">${num}</div>
        `).join('');
    }

    // method to render character

    this.getCharacterHtml = function() {
        //object destructuring
        const {elementId, name, avatar, health, diceCount} = this;

        const diceHtml = this.getDiceHtml(diceCount);

        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>
        `
    }
}

export default Character