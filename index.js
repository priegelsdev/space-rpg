const hero = {
    elementId: "hero",
    name: "Marine",
    avatar: "img/marine.jpg",
    health: 60,
    diceScore: 6,
    diceCount: 3
}

const monster = {
    elementId: "monster",
    name: "Space Worm",
    avatar: "img/worm.jpg",
    health: 10,
    diceScore: 4,
    diceCount: 1
}

// function to render out character data
function renderCharacter(char) {

    // object destructuring
    const {elementId, name, avatar, health, diceScore, diceCount} = char;

    let diceHtml = '';
    for (let i = 0; i < diceCount; i++) {
        diceHtml += `<div class="dice">${diceScore}</div>`
    }

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