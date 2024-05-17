let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector('#msg');
const userscorepara=document.querySelector('#user-score');
const compscorepara=document.querySelector('#comp-score');

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]; 
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was a draw");
    msg.innerText="Game Draw Play Again";
    msg.style.backgroundColor=" #081b31";
}

const playgame = (userchoice) => {
    console.log("User choice = " + userchoice);
    const compChoice = genCompChoice();
    console.log("COMP choice = " + compChoice);

    if (userchoice === compChoice) {  
        drawGame();
    } else if (
        (userchoice === "rock" && compChoice === "scissors") ||  
        (userchoice === "scissors" && compChoice === "paper") ||
        (userchoice === "paper" && compChoice === "rock")
    ) {
        userscore++;
        userscorepara.innerText=userscore;
        console.log("userWins");  
        msg.innerText="You WIN !";
        msg.style.backgroundColor="green";
    } else {
        compscore++;
        compscorepara.innerText=compscore;
        console.log("computerWins"); 
        msg.innerText="Computer WIN"; 
        msg.style.backgroundColor="red";
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        console.log("Choice was clicked: " + userchoice);
        playgame(userchoice);
    });
});
