//DOM Elements
var $newGameButton = document.getElementById("new-game-button");
var $placeholders = document.getElementById("placeholders");
var $guessedLetters = document.getElementById("guessed-letters");
var $guessesLeft = document.getElementById("guesses-left");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");


//Variables
var wordbank = ['eminem', 'kanye west', 'run the jewles', 'big sean', 'drake', 'logic', 'hopsin'];
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var gameRunning = false;
var pickedWord = '';
var pickedWordPlaceholderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];
var logic = document.getElementById("logic");
var bigsean = document.getElementById("big-sean");
var drake = document.getElementById("drake");
var eminem = document.getElementById("eminem");
var hopsin = document.getElementById("hopsin");
var kanye = document.getElementById("kanye-west");
var rtj = document.getElementById("rtj");

//NewGame starts game, resets the stats, and displays a new word
function newGame() {
    var ranNum = Math.floor(Math.random() * wordbank.length);
    gameRunning = true;
    guessesLeft = 10;
    pickedWordPlaceholderArr = [];
    guessedLetterBank = [];
    incorrectLetterBank = [];

    //New word
    pickedWord = wordbank[ranNum];
    console.log(pickedWord);
    pickedLetters = pickedWord.split("");
    

    //Generate underscores
    for (var i = 0; i < pickedLetters.length; i++) {
        if (pickedLetters[i] === " ") {
            pickedWordPlaceholderArr.push(' ');
        } else {
            pickedWordPlaceholderArr.push('_');
        }

        //Write all new game info to DOM
        $guessesLeft.textContent = guessesLeft;
        $placeholders.textContent = pickedWordPlaceholderArr.join('');
        $guessedLetters.textContent = incorrectLetterBank;
    }

    //Do something with the letter pressed
    function letterGuess(letter) {
        //Check if letter pressed is correct
        if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {
            guessedLetterBank.push(letter);
            //If the letter is correct, loop through each letter to find the right underscore to replace
            for (var i = 0; i < pickedWord.length; i++) {
                //If the letter pressed is contained somewhere in the picked word
                //Convert guess to lowercase for checking purposess, then return uppercase
                if (letter.toLowerCase() === pickedWord[i].toLowerCase()) {
                    pickedWordPlaceholderArr[i] = pickedWord[i].toUpperCase();
                }
            }
            //Push correct letter do DOM
            $placeholders.textContent = pickedWordPlaceholderArr.join('');
            //Jump to incorrect letter seciton
            checkIncorrect(letter);
        } else {
            if (!gameRunning) {
                alert("No Game");
            } else {
                alert("You've Already Guessed this Key, Try Again!");
            }
        }

    }

    //Check if letter is not in the word
    function checkIncorrect(letter) {
        if (pickedWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1 && pickedWordPlaceholderArr.indexOf(letter.toUpperCase()) === -1) {
            //Subtract a guess
            guessesLeft--;
            //Add to incorrect guesses list
            incorrectLetterBank.push(letter);
            //Push incorrect guesses and guesses left to DOM
            $guessedLetters.textContent = incorrectLetterBank.join(" ");
            $guessesLeft.textContent = guessesLeft;
        }
        checkLoss();
    }

    //Check loss
    function checkLoss() {
        if (guessesLeft === 0) {
            losses++;
            gameRunning = false;
            $losses.textContent = losses;
            $placeholders.textContent = pickedWord.toUpperCase();
            
            pauseAudio();
            alert("You Lost! Click the New Game Button to Try Again.");
        }
        checkWin();
    }

    //Check win
    function checkWin() {
        if (pickedWord.toLowerCase() === pickedWordPlaceholderArr.join('').toLowerCase()) {
            wins++;
            gameRunning = false;
            $wins.textContent = wins;
            alert("Congradulations, You are a Winner! Click the New Game Button to Start a New Game.");
        }
    }


    //add event listener for new game button
    $newGameButton.addEventListener('click', newGame);

    //add onkey event that filters out all keys but letters and numbers
    document.onkeyup = function (event) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            letterGuess(event.key);
        }
    }

}




