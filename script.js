"use strict"
window.addEventListener("load", main);

let currentGuess;
let lowInBound = 0;
let highInBound = 100;


function main() {
    console.log("Game Started");
    document.querySelector("#start-game").addEventListener("click", startGame)
    
}

function startGame() {
    document.querySelector("#start-game").style.display = "none";
    document.querySelector("#guesser").style.display = "block";

    lowInBound = 0;
    highInBound = 100
    currentGuess = makeAGuess();
    reciveEvent();
}


function reciveEvent() {
    document.querySelector("#guess-too-low").addEventListener("click", guessIsTooLow);
    document.querySelector("#guess-too-high").addEventListener("click", guessIsTooHigh);
    document.querySelector("#guess-correct").addEventListener("click", guessCorrect);
    document.querySelector("#start-over").style.display = "none";

}

function makeAGuess() {
    let guess = Math.floor((highInBound - lowInBound)/2) + lowInBound;
    outPutResult(`I am guessing ${guess}`)
    return guess;
}

function guessIsTooLow(){
    if (currentGuess < highInBound) {
        lowInBound = currentGuess + 1;
        currentGuess = makeAGuess();
        outPutResult("you guess was too low");
        if (lowInBound >= highInBound) {
            outPutResult("You are cheating!")
        }
    }
}

function guessIsTooHigh(){
    if (currentGuess > lowInBound) {
        highInBound = currentGuess - 1;
        currentGuess = makeAGuess();
        outPutResult("you guess was too high");
        if (lowInBound >= highInBound) {
            outPutResult("You are cheating!")
        }
    }
}

function guessCorrect() {
    outPutResult(`That is correct! The number was ${currentGuess}`)

    document.querySelector("#guess-too-low").removeEventListener("click", guessIsTooLow);
    document.querySelector("#guess-too-high").removeEventListener("click", guessIsTooHigh);
    document.querySelector("#guess-correct").removeEventListener("click", guessCorrect);

    document.querySelector("#start-game").style.display = "none";

    startOver()

}


function outPutResult(text) {
    document.querySelector("#output").insertAdjacentHTML("beforeend", `<li>${text}</li>`);
}

function startOver() {
    const startOverBtn = document.querySelector("#start-over");
    startOverBtn.style.display = "block"
    startOverBtn.addEventListener("click", restartGame)

}

function restartGame() {
    document.querySelector("#start-over").style.display = "none";
    document.querySelector("#output").innerHTML = "";
    document.querySelector("#start-game").style.display = "block"
    document.querySelector("#guesser").style.display = "none";

}

