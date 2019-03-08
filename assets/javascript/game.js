//GLOBAL VARIABLES
//===========================================================
//list of rappers
var rappers = ['eminem', 'kanye west', 'run the jewles', 'big sean', 'drake'];

//chose a random word
var ranNum = Math.floor(Math.random() * rappers.length);
var chosenRapper = rappers[ranNum];
var rapperWords = chosenRapper.split(" ");
var rapperLetters = chosenRapper.split("");
var arrayOfArrays = [];
var underScores = [];
var rightWord = [];
var wrongLetters = [];
var underScore = [];

//testing
console.log(chosenRapper);
console.log(rapperLetters);
console.log(chosenRapper.length);
console.log(rapperWords);
console.log(rapperWords.length);

//generate underscores
for (var i = 0; i < rapperLetters.length; i++) {
    if (rapperLetters[i] === " ") {
        underScores.push(' ');
    } else {
        underScores.push('_');
        
    }
    document.getElementById("under-scores").innerHTML = underScores.join("");
    }

document.onkeyup = function (e) {
    for (var i = 0; i < rapperLetters.length; i++) {
        if (e.key === rapperLetters[i]) {
            underScores[i] = e.key;
            document.getElementById("under-scores").innerHTML = underScores.join("");
        } else if (rapperLetters.indexOf(e.key) === -1) {
            if (wrongLetters.indexOf(e.key) === -1) {
                wrongLetters.push(e.key);
                document.getElementById("wrong-letters").innerHTML = wrongLetters.join(" ");
            }
        }
    }
}