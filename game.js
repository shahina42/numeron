// Iteration 2: Generate 2 random number and display it on the screen
var score = document.getElementById('score-box');


let num1 = 1+Math.floor(Math.random() * 100); 
let num2 = 1+Math.floor(Math.random() * 100);

const contnum1 = document.getElementById('number1')
const contnum2 = document.getElementById('number2')

contnum1.innerText = num1;
contnum2.innerText = num2;

var score = parseInt(sessionStorage.getItem("scr")) || 0;
// Iteration 3: Make the options button functional
var btns = document.getElementById('buttons')

btns.addEventListener('click', (event) => {
    if (num1 > num2 && event.target.id == 'greater-than') {
        console.log('correct');
        score += 5
        sessionStorage.setItem("scr", score)
        window.location.reload()
    }
    else if (num1 < num2 && event.target.id == 'lesser-than') {
        console.log('correct');
        score += 5
        sessionStorage.setItem("scr", score)
        window.location.reload()
    }
    else if (num1 == num2 && event.target.id == 'equal-to') {
        console.log('correct');
        score += 5
        sessionStorage.setItem("scr", score)
        window.location.reload()
    } else {
        window.location.href = 'gameover.html'
    }
})
// Iteration 4: Build a timer for the game
const timer = document.getElementById('timer');
let countdown = 5;

const timeinterval = setInterval(() => {
    timer.innerText = countdown;
    countdown -= 1;
    if (countdown == 0) {
        window.location.href = 'gameover.html'
    }
}, 1000);