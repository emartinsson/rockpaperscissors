let humanWins = 0;
let compWins = 0;
let draws = 0;

function main(){
    const rockImage = document.querySelector(".Rock");
    const paperImage = document.querySelector(".Paper");
    const scissorImage = document.querySelector(".Scissors");

    rockImage.addEventListener("click", e => {
        game(e.target.className);
    });
    
    paperImage.addEventListener("click", e => {
        game(e.target.className);
    });

    scissorImage.addEventListener("click", e => {
        game(e.target.className);
    });
}


function game(playerSelection){
    let playerChoice = playerSelection;
    let computerChoice = computerSelection();
    addImages(playerChoice, computerChoice);

    const choices = document.querySelector(".roundResult")
    choices.textContent = `You selected ${playerChoice} and the computer went for ${computerChoice}`;
        
    let result = playRound(playerChoice, computerChoice);
        
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

function addImages(playerChoice, computerChoice){
    const infoHeader = document.querySelector("#infoheader");
    const playerTag = document.querySelector(".playerChoice p");
    const computerTag = document.querySelector(".computerChoice p");

    const playerImage = document.querySelector(".playerChoice img")
    const computerImage = document.querySelector(".computerChoice img")

    playerImage.className="selectedImageClassTwo";
    computerImage.className="selectedImageClassTwo";

    if (playerChoice === "Rock"){
        playerImage.src = "img/hand.png";
    } else if (playerChoice === "Paper"){
        playerImage.src = "img/paper.png";
    } else if (playerChoice === "Scissors"){
        playerImage.src = "img/scissors.png";
    }

    if (computerChoice === "Rock"){
        computerImage.src = "img/hand.png";
    } else if (computerChoice === "Paper"){
        computerImage.src = "img/paper.png";
    } else if (computerChoice === "Scissors"){
        computerImage.src = "img/scissors.png";
    }

    setTimeout(() => {
        playerImage.className="selectedImageClass";
        computerImage.className="selectedImageClass";
        playerTag.textContent = playerChoice;
        computerTag.textContent = computerChoice;}, 60);

}



function updateScore () {
    const playerScore = document.querySelector(".playerScore p");
    playerScore.textContent = humanWins;
    
    const compScore = document.querySelector(".computerScore p");
    compScore.textContent = compWins;
}

function gameOver() {
    let round = document.querySelector(".round");
    let containerDiv = document.querySelector(".container");
    let resultDiv = document.createElement("div");
    resultDiv.className = "resultDivClass";

    let resultText = document.createElement("p");
    let winner = ""; 
    if (compWins === 5){
        winner = "Computer"
    } else { winner = "You"}
    resultText.textContent = `Congratulations to ${winner.toLowerCase()}, who got to five rounds first.`;
    let newButton = document.createElement("button");
    newButton.textContent = "Press here to play again";
    newButton.addEventListener("click", ()=>{
        resultDiv.parentNode.removeChild(resultDiv);
        reset();
    })
    resultDiv.append(resultText);
    resultDiv.append(newButton);
    containerDiv.insertBefore(resultDiv, round);
}

function reset() {
    //Resetting global stats
    humanWins = 0;
    compWins = 0;
    draws = 0;
    
    //Resetting last made choice
    const playerTag= document.querySelector(".playerChoice p");
    const computerTag = document.querySelector(".computerChoice p");
    const playerImage = document.querySelector(".playerChoice img")
    const computerImage = document.querySelector(".computerChoice img")
    computerImage.className = "selectedImageClassTwo";
    playerImage.className = "selectedImageClassTwo";
    playerTag.textContent = "";
    computerTag.textContent  = "";


    const roundResult = document.querySelector(".roundResult");
    roundResult.textContent = "";

    const playerScore = document.querySelector(".playerScore p");
    playerScore.textContent = humanWins;
    
    const compScore = document.querySelector(".computerScore p");
    compScore.textContent = compWins;
}

main();