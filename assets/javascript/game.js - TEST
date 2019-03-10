//GLOBAL VARIABLES
//===========================================================
//list of rappers
var rappers = ['eminem', 'kanye west', 'run the jewles', 'big sean', 'drake'];
var loseCount = 0;
var winCount = 0;
var gameRunning = false;
var underScores = [];
var wrongLetters = [];
var guessesLeft = 10;

//chose a random word
function gameStart() {
    var ranNum = Math.floor(Math.random() * rappers.length);
    chosenRapper = rappers[ranNum];
    rapperLetters = chosenRapper.split("");
    underScores = [];
    wrongLetters = [];
    gameRunning = true;
    guessesLeft = 10;

    //testing
    console.log(chosenRapper);
    console.log(rapperLetters);
    console.log(chosenRapper.length);

    //generate underscores
    for (var i = 0; i < rapperLetters.length; i++) {
        if (rapperLetters[i] === " ") {
            underScores.push(' ');
        } else {
            underScores.push('_');
        }
        document.getElementById("under-scores").innerHTML = underScores.join("");
    }
    //capture user input
    document.onkeyup = function (e) {
        for (var i = 0; i < rapperLetters.length; i++) {
            //if the user input is in the rapper's name
            if (e.key === rapperLetters[i]) {
                underScores[i] = e.key;
                document.getElementById("under-scores").innerHTML = underScores.join("");
                //if the user input is not on the rapper's name
            } else if (rapperLetters.indexOf(e.key) === -1) {
                //if the wrong guess hasn't already been guessed
                if (wrongLetters.indexOf(e.key) === -1) {
                    wrongLetters.push(e.key);
                    //write in wrong guesses section
                    document.getElementById("wrong-letters").innerHTML = wrongLetters.join(" ");
                    guessesLeft--;
                    document.getElementById("guesses-left").innerHTML = guessesLeft;
                }
            }
            }
        if (guessesLeft <= 0) {
            alert("You Lost :(. Press Reset to Try Again!");
            loseCount++;
            document.getElementById("lose-count").innerHTML = loseCount;
            gameRunning = false;
        }   
    }
}
