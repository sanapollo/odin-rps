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
    const computerout = document.getElementById('computer');
    const userout = document.getElementById('user');

    computerout.textContent = computer;
    userout.textContent = user;


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
    return winner;
}
buttonAttach = () => {
    const clear = document.getElementById("clear");
    const scissors = document.getElementById("scissors");
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");

    scissors.addEventListener('click', () => {
        playGameScores("scissors");
    });
    rock.addEventListener('click', () => {
        playGameScores("rock");
    });
    paper.addEventListener('click', () => {
        playGameScores("paper");
    });
    clear.addEventListener('click', () => {
        cscore = 0;
        uscore = 0;
    });
}

playGameScores = (user) => {
    const outcscore = document.getElementById("computerscore");
    const outuscore = document.getElementById("userscore");
    const output = document.getElementById('output');
    
    // Clear Button
    

    //Launch Game
    let winner = playGame(user);

    //Winner Message
    if (winner == "tie") {
        winner = "You tied! Try again";
    } else if (winner) {
        winner = "You won! Well done!";
        uscore += 1;
    } else {
        winner = "You lost! Computer won.";
        cscore += 1;
    }
    output.textContent = winner;
    outcscore.textContent = cscore;
    outuscore.textContent = uscore;

}

let cscore = 0;
let uscore = 0;
buttonAttach();