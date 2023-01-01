// function to get random dice results

function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6 + 1)) 
}

// function to display placeholder dice on initial page load

function getPlaceholderHtml() {
    const diceArr = document.querySelectorAll('.dice')
    diceArr.forEach(dice => clear(dice)
        )

    // function to clear dice scores and make background transparent
        function clear(dice) {
            dice.innerHTML = '';
            dice.classList.add('placeholder-dice')
        }
}

export {getDiceRollArray, getPlaceholderHtml} 