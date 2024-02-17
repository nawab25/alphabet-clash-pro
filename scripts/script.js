// function play() {
//     const homeSection = document.querySelector(".home");
//     const playGroundSection = document.querySelector(".play-ground");
//     homeSection.classList.add("hidden");
//     playGroundSection.classList.remove("hidden");
// }

//short way by function
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
function randomAlphabet() {
    const showText = document.getElementById('show-text');
    let str = 'abcdefghijklmnopqrstuvwxyz';
    let string = str.split('');
    let randomNumber = Math.round(Math.random() * 25);
    let alphabet = string[randomNumber];
    showText.innerText = alphabet.toUpperCase();
    setBgColorById(alphabet);
}

function play() {
    hideElementById('home');
    showElementById('play-ground');
    randomAlphabet();
}