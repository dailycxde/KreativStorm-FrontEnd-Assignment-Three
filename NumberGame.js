function generateRandomNumber() {
    return Math.floor((Math.random() * 100));
};

const getPlayerGuess = function(){
    let x = prompt("enter a number: ");
    x = Number(x);

    if(Number.isInteger(x)){
        return x;
    } else{
        console.log("invalid input\n");
        return getPlayerGuess();
    }
};

const checkGuess = (pg, ca) => {
    if(pg>ca){
        console.log("too high\n");
        return false;
    } else if(pg<ca){
        console.log("too low\n");
        return false;
    } else{
        return true;
    }
};

function game(){

    let number = generateRandomNumber();
    let guesses = [];
    let state = false;


    for(let i=0;i<10;i++){
        let guess = getPlayerGuess();
        guesses.push(guess);
        console.log("guesses: ", guesses);

        if(checkGuess(guess,number)){
            state = true;
            break;
        }
    }

    if(state){
        console.log("YOU WIN!\n");
        console.log(`Number of Attempts: ${guesses.length}\n`);
    } else{
        console.log("YOU LOSE!\n");
        console.log(`The number was: ${number}\n`);
    }

    let cntn = prompt("Would you like to play again? (Y/N): ");
    if(cntn.toUpperCase()=="Y"){
        return game();
    }

    console.log("exiting...\n");
    return;
}

game();