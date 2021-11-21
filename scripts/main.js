let humanWins = 0;
let compWins = 0;
let draws = 0;
let round = 0;


function game(){
    const buttons = document.querySelectorAll("button");
    const choices = document.querySelector(".choices")
    buttons.forEach((button) => button.addEventListener("click", () =>{
        let playerChoice = button.id;
        let computerChoice = computerSelection();
        choices.textContent = `You selected ${playerChoice} and the computer went for ${computerChoice}`;
        let result = playRound(playerChoice, computerChoice);
        round++;
        if (result === 1){
            humanWins++;
            choices.textContent += ". You win!";
        } else if (result === -1){
            compWins++;
            choices.textContent += ". Computer win!";
        } else {
            draws++;
            choices.textContent += ". It's a draw!";
        }
        updateScore();
        if (humanWins === 5 || compWins === 5)  {
            gameOver();
        } 
    }));

}


function computerSelection(){
    let choices = ["Rock", "Paper", "Scissors"];
    let randChoice = choices[Math.floor(Math.random()*choices.length)];
    return randChoice;
}

function playRound(playerChoice, computerChoice){
    if (playerChoice === "Rock"){
        if (computerChoice === "Scissors"){
            return 1;
        } else if (computerChoice === "Paper"){
            return -1;
        } else return 0;
    }

    if (playerChoice === "Scissors"){
        if (computerChoice === "Paper"){
            return 1;
        } else if (computerChoice === "Rock"){
            return -1;
        } else return 0;
    }

    if (playerChoice === "Paper"){
        if (computerChoice === "Rock"){
            return 1;
        } else if (computerChoice === "Scissors"){
            return -1;
        } else return 0;
    }
}


const updateScore = () => {
    const resultDiv = document.querySelector(".results");
    resultDiv.textContent = `Human wins: ${humanWins}.\nComputer wins: ${compWins}.\nNumber of draws: ${draws}.`;
}

const gameOver = () => {
    if (humanWins === 5){
        alert("Human goes first to five games.")
    } else {
        alert("Computer goes first to five games.");
    }
    humanWins = 0;
    compWins = 0;
    draws = 0;
    round = 0;
    updateScore();
    const choices = document.querySelector(".choices")
    choices.textContent = "";
}


game();