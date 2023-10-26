// Iteration 5: Store the player score and display it on the game over screen
const score = document.getElementById('score-board');
const playbtn = document.getElementById('play-again-button')

playbtn.addEventListener('click',()=>{
    window.location.href='game.html'
    sessionStorage.removeItem('scr')
})
score.innerText = sessionStorage.getItem("scr") || 0;