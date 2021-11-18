function computerSelection(){
    let choices = ["Rock", "Paper", "Scissors"];
    let randChoice = choices[Math.floor(Math.random()*choices.length)];
    return randChoice;
}

function playerSelection(){
    let choices = ["Rock", "Paper", "Scissors"];
    while (true){
        let userChoice = prompt("Please select between " + choices.join(", "));
        userChoice = userChoice.toLowerCase();
        userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
        for (let i = 0; i <choices.length; i++){
            if (choices[i]===userChoice){
                return userChoice;
            }
        }
        alert("Wrong input.")
    }
}

function playRound(){
    let playerChoice = playerSelection();
    let computerChoice = computerSelection();
    console.log(`You selected ${playerChoice} and the computer went for ${computerChoice}`);

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

function game(){
    let humanWins = 0;
    let compWins = 0;
    let draws = 0;
    
    for (let i = 1; i<=5; i++){
        console.log("Round " + i);
        let result = playRound();
        if (result === 1){
            humanWins++;
            console.log("Human win human win human win");
        } else if (result === -1){
            compWins++;
            console.log("Computer win computer win computer win");
        } else {
            draws++;
            console.log("No one wins?! It's a draw!");
        }
        
    }
    let str = "";
    console.log(`Human wins: ${humanWins}.\nComputer wins: ${compWins}.\nNumber of draws: ${draws}.`);
    if (humanWins>compWins){
        str+="Humans are superior to computers. The human wins the five round battle!";
    }else if (compWins>humanWins){
        str+="Like the terminator movie, computers are now superior. Humans lost the five round battle.";
    } else {
        str+="Humans and computers are equal, at least according to this game!";
    }
    console.log(str);
}