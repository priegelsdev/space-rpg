document.querySelector('.hero').innerHTML = `
  <div class="character-card">
    <h4 class="name"> Marine <h4>
    <img class="avatar" src="img/marine.jpg">
    <p class="health">health: <b> 60 </b></p>
    <div class="dice-container"><div class="dice"> 6 </div></div>
  </div>
`

document.querySelector('.monster').innerHTML = `
  <div class="character-card">
    <h4 class="name"> Space Worm <h4>
    <img class="avatar" src="img/worm.jpg">
    <p class="health">health: <b> 10 </b></p>
    <div class="dice-container"><div class="dice"> 4 </div></div>
  </div>
`