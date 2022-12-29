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

function getDiceRollArray(diceCount) {
    let diceRollArray = [];
    for (let i = 0; i < diceCount; i++) {
        let randomNum = Math.floor(Math.random() * 6) + 1;
        diceRollArray.push(randomNum);
    }
    return diceRollArray;
}

function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount).map(
        num => `<div class="dice">${num}</div>`
    ).join('');
}

// function to render out character data
function renderCharacter(char) {

    // object destructuring
    const {elementId, name, avatar, health, diceCount} = char;

    // mapping over dice array instead of looping
    const diceHtml = getDiceHtml(diceCount);

    document.getElementById(elementId).innerHTML =
    `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}" />
        <div class="health">health: <b> ${health} </b></div>
        <div class="dice-container">
            ${diceHtml}
        </div>
    </div>`
}

renderCharacter(hero);
renderCharacter(monster);