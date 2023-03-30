// function to get random dice results

function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6 + 1)) 
}

// function to display placeholder dice on initial page load

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(() => `<div class="placeholder-dice"></div>`).join('')
}

const getPercentage = (remainingHealth, maximumHealth) => 
    100 * remainingHealth / maximumHealth;

// get random item after first kill

function getItem() {
  const items = [{name: 'Plasma gun', damage: 10, img: "img/gun.jpeg"}, {name: 'Medkit', health: 10, img: "img/medkit.jpeg"}]
  return items[Math.floor(Math.random() * 2)]
}

export {getDiceRollArray, getDicePlaceholderHtml, getPercentage, getItem} 