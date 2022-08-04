let compScore = 0
let playerScore = 0
const compScore_span = document.getElementById("comp-score")
const playerScore_span = document.getElementById("player-score")
const scoreDisplay = document.querySelector("score-display")
const resultDisplay = document.getElementById("result-display")
const endGameDisplay = document.getElementById("endgame-display")
const selections = document.querySelectorAll("button")
let playerChoice
let computerChoice
let result
let endGameMsg



selections.forEach(selection => selection.addEventListener("click", (e) => {
    playerChoice = e.target.id
    play()
}))

//randomly generates computer input
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * selections.length)

    if (randomNumber === 0) {
        computerChoice = "⛰️"
    }
    if (randomNumber === 1) {
        computerChoice = "📃"
    }
    if (randomNumber === 2) {
        computerChoice = "✂️"
    }
}

//compares player and computer inputs
function getResult() {
    if (playerChoice === computerChoice) {
        result = "The round was a draw!"
        }
    if (playerChoice === "⛰️" && computerChoice === "📃") {
        result = "⛰️ < 📃 You lost the round!"

    }
    if (playerChoice === "📃" && computerChoice === "✂️") {
        result = "📃 < ✂️ You lost the round!"

    }
    if (playerChoice === "✂️" && computerChoice === "⛰️") {
        result = "✂️ < ⛰️ You lost the round!"

    }
    if (playerChoice === "⛰️" && computerChoice === "✂️") {
        result = "⛰️ > ✂️ You won the round!"

    }
    if (playerChoice === "✂️" && computerChoice === "📃") {
        result = "✂️ > 📃 You won the round!"

    }
    if (playerChoice === "📃" && computerChoice === "⛰️") {
        result = "📃 > ⛰️ You won the round!"

    }
    trackScore()
    resultDisplay.innerHTML = result
    playerScore_span.innerHTML = playerScore
    compScore_span.innerHTML = compScore
}

//take result from getResult to track score on result-display
function trackScore() {
    switch (result) {
        case "⛰️ > ✂️ You won the round!":
        case "✂️ > 📃 You won the round!":
        case "📃 > ⛰️ You won the round!":
            document.getElementById("result-display").classList.add("green-glow"),
            setTimeout(function() {document.getElementById("result-display").classList.remove("green-glow") }, 750)
            playerScore++
            break;
        case "⛰️ < 📃 You lost the round!":
        case "📃 < ✂️ You lost the round!":
        case "✂️ < ⛰️ You lost the round!":
            document.getElementById("result-display").classList.add("red-glow"),
            setTimeout(function() {document.getElementById("result-display").classList.remove("red-glow") }, 850)
            compScore++
            break;
        case "The round was a draw!":
            document.getElementById("result-display").classList.add("gray-glow"),
            setTimeout(function() {document.getElementById("result-display").classList.remove("gray-glow") }, 850)
            break;
    }

    //this part of code can possibly be put into a seperate function
    if (playerScore === 5) {
        endGameMsg = "Game Over! Player Won!"
        endGameDisplay.innerHTML = endGameMsg
        // temp solution to reset score
        compScore = 0;
        playerScore = 0;
    }
    if (compScore === 5) {
        endGameMsg = "Game Over! Comp Won!"
        endGameDisplay.innerHTML = endGameMsg
        //temp solution to reset score
        compScore = 0;
        playerScore = 0;
    }
}


//just to make the click event function and everything look less messy
function play() {
    getComputerChoice()
    getResult()
}