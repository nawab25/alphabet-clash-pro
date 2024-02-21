// function play() {
//     const homeSection = document.querySelector(".home");
//     const playGroundSection = document.querySelector(".play-ground");
//     homeSection.classList.add("hidden");
//     playGroundSection.classList.remove("hidden");
// }


let audio = new Audio();
let isPlayOn = false;
//short way to add and remove class by function
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}
function setBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-amber-400');
    element.classList.add('text-white');
}
function removeBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-amber-400');
    element.classList.remove('text-white');
}
//create random number and alphabet
function continueGame() {
    const showText = document.getElementById('show-text');
    let str = 'abcdefghijklmnopqrstuvwxyz';
    let string = str.split('');
    let randomNumber = Math.round(Math.random() * 25);
    let alphabet = string[randomNumber];
    showText.innerText = alphabet.toUpperCase();
    setBgColorById(alphabet);
}

//KeyPress functionality
function handleKeyPress(event) {
    if(isPlayOn === false) return;
    let userPressedKey = event.key;
    let showText = document.getElementById("show-text").innerText;
    let expectedKey = showText.toLowerCase();
    if (userPressedKey === expectedKey) {
        audio.src = "../audio/success.mp3";
        audio.play();
        //count score
        let scoreElement = document.getElementById("score-display");
        let currentScoreText = scoreElement.innerText;
        let currentScore = parseInt(currentScoreText);
        scoreElement.innerText = currentScore + 1;
        removeBgColorById(expectedKey);
        continueGame();
    } else {
        audio.src = "../audio/wrong.wav";
        audio.play();
        let lifeElement = document.getElementById("life-display");
        let currentLifeText = lifeElement.innerText;
        let currentLife = parseInt(currentLifeText);
        lifeElement.innerText = currentLife - 1;

        if (currentLife === 1) {
            gameOver();
        }
    }

}
document.addEventListener('keyup', handleKeyPress);

//Game over function
function gameOver() {
    hideElementById('play-ground');
    showElementById('score');
    let lastScore = document.getElementById("score-display").innerText;
    document.getElementById("final-score").innerText = lastScore;
    isPlayOn = false;
}
//play button click functionality
function play() {
    isPlayOn = true;
    hideElementById('home');
    showElementById('play-ground');

    //code for play again button
    hideElementById('score');
    document.getElementById('life-display').innerText = 5;
    let showText = document.getElementById("show-text").innerText;
    let expectedKey = showText.toLowerCase();
    removeBgColorById(expectedKey);
    let scoreElement = document.getElementById("score-display");
    scoreElement.innerText = 0;
    continueGame();
}