computerPlay = () => {
    let random = Math.floor(Math.random() * 10);
    let answer;

    if (random > 3 && random < 7) {
        answer = "paper";
    } else if (random <= 3) {
        answer = "rock";
    } else if (random > 6) {
        answer = "scissors";
    } else {
        answer = "Something went wrong";
    }
    return answer;

}

userPlay = () => {
    let answer = prompt("Rock Paper Or Scissors?");
    answer = answer.toLowerCase();
    return answer;
}

demo = () => {
    let answer = computerPlay();
    return answer;
}


playGame = (user) => {
    if (user) {

    } else {
        user = demo();
    }
    let computer = computerPlay();
    let winner;
    const output = document.getElementById('output');
    const computerout = document.getElementById('computer');
    
    
    computerout.textContent = computer;


    //Game Logic
    if (user == "rock") {
        if (computer == "paper") {
            winner = false;
        } else if (computer == "scissors") {
            winner = true;
        } else if (computer == "rock") {
            winner = "tie";
        }
    } else if (user == "scissors") {
        if (computer == "paper") {
            winner = true;
        } else if (computer == "scissors") {
            winner = "tie";
        } else if (computer == "rock") {
            winner = false;
        }
    } else if (user == "paper") {
        if (computer == "paper") {
            winner = "tie";
        } else if (computer == "scissors") {
            winner = false;
        } else if (computer == "rock") {
            winner = true;
        }
    }
    console.log(`You entered ${user}. If you didn't enter anything this was generated for you. Computer said ${computer}`);
    //Winner Message
    if (winner == "tie") {
        winner = "You tied! Try again";
    } else if (winner) {
        winner = "You won! Well done!";
    } else {
        winner = "You lost! Computer won.";
    }
    output.textContent = winner;
    //return winner;
}

fewGames = (choice) => {
    let max = 5;
    let pcounter = 0, ccounter = 0;

    for (let i = 0; i < max; i++) {
        let game = playGame(choice);
        
        //Counting
        
        if (game == "You won! Well done!") {
            pcounter +=1;
        } else if (game == "You lost! Computer won."){
            ccounter +=1;
        }
        console.log(game);
        console.log(`Game no: ${i}. Wins: P ${pcounter}, C ${ccounter}`);
    }



}

//console.log(fewGames());
startGame = () => {
    const scissors = document.getElementById("scissors");
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    


    scissors.addEventListener('click', () => {
        console.log("pressed");
        playGame("scissors");
        
    });
    rock.addEventListener('click', () => {
        playGame("rock");
    });
    paper.addEventListener('click', () => {
        playGame("paper");
    });


}

startGame();