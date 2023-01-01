// function to get random dice results

function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6 + 1)) 
}

// function to display placeholder dice on initial page load

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(() => `<div class="placeholder-dice"></div>`).join('')
}

export {getDiceRollArray, getDicePlaceholderHtml} 