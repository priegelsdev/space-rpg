const hero = {
    elementId: "hero",
    name: "Marine",
    avatar: "img/marine.jpg",
    health: 60,
    diceCount: 3
}

const monster = {
    elementId: "monster",
    name: "Space Worm",
    avatar: "img/worm.jpg",
    health: 10,
    diceCount: 1
}

// function to get random dice results

function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6 + 1)) 
}

// function to display dice results

function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount).map(
        num => `<div class="dice">${num}</div>`
    ).join('');
}

// constructor function as template to create multiple characters from

function Character(data) {
    this.elementId = data.elementId;
    this.name = data.name;
    this.avatar = data.avatar;
    this.health = data.health;
    this.diceCount = data.diceCount;

    this.getCharacterHtml = function() {
        const {elementId, name, avatar, health, diceCount} = this;

        const diceHtml = getDiceHtml(diceCount);

        document.getElementById(elementId).innerHTML = `
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

const marine = new Character(hero);
const spaceWorm = new Character(monster);

//invoke html method on constructor function to render out characters

marine.getCharacterHtml();
spaceWorm.getCharacterHtml();

