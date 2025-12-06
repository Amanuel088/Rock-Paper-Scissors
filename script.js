//computer Choice 
let getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
//Human Choice 
let getHumanChoice = () => {
    const humanChoice = prompt("Your Choice: ").toLowerCase();
    return humanChoice;
}

//Play the Entire Game 
let playGame = () => {

    let humanScore = 0;
    let computerScore = 0;

    // Play a Single Round 
let playRound = (humanChoice,computerChoice) => {
    if(humanChoice === computerChoice){
        return "Hold lets play again!!";
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        return " you wiin "+humanChoice+" beats "+computerChoice;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return " you wiin "+humanChoice+" beats "+computerChoice;
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        return " you wiin "+humanChoice+" beats "+computerChoice;
    }
    else{
        computerScore++;
        return " you lose "+computerChoice+" beats "+humanChoice;
    }
}
    //Play 5 times
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice,computerChoice));
    }

    console.log("Final Results");
    console.log("Your Score:", humanScore);
    console.log("Computer Score:", computerScore);

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game!");
    } else {
        console.log("It's a tie overall!");
    }

}
playGame();

