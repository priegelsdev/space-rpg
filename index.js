const hero = {
    elementId: "hero",
    name: "Marine",
    avatar: "img/marine.jpg",
    health: 60,
    diceScore: 6
}

const monster = {
    elementId: "monster",
    name: "Space Worm",
    avatar: "img/worm.jpg",
    health: 10,
    diceScore: 4
}

function renderCharacter(char) {
    document.getElementById(char.elementId).innerHTML =
    `<div class="character-card">
        <h4 class="name"> ${char.name} </h4>
        <img class="avatar" src="${char.avatar}" />
        <div class="health">health: <b> ${char.health} </b></div>
        <div class="dice-container">
            <div class="dice"> ${char.diceScore} </div>
        </div>
    </div>`
}

renderCharacter(hero);
renderCharacter(monster);