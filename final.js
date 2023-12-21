const coises = ["sten", "sax", "påse!"]
const playGame = document.getElementById("play-game");

let userScore = 0;
let computerScore = 0;

playGame.addEventListener("click", function(){

    for (let i = 0; i < 3; i++) { 
    let computerChois = coises[Math.floor(Math.random() * coises.length)] 
    
    let userChois;
    let pattern =/^(sten|sax|påse){1}$/i;  
    
    while(!pattern.test(userChois)) {        
        userChois = prompt("Choose sten, sax eller påse");    
        if (userChois === null) {
            alert("You have cancelled the game. You can click on the start-button to play again!")
            return;
        }
        if (!pattern.test(userChois)) {
            alert("You have to choose between sten,sax or påse!");
        }    
    }

    if (userChois !== computerChois) {
        if (userChois === "sten") {
            if(computerChois === "sax") {
                userScore++;                
            } else {
                computerScore++;
            }
        }
        else if (userChois === "sax") {
            computerChois === "påse" ? userScore++ : computerScore++;
        }
        else {
            computerChois === "sten" ? userScore++ : computerScore++;             
        } 
    } else {
        alert("You guessed the same thing!");
    } 

    console.log("user Score : " +userScore)
    console.log("compute Score : " +computerScore)
}

alert(userScore > computerScore ? "You won!!" : "The computer has won!");

});



