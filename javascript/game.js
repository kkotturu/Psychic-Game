var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var numGuess = 10;
var guessChoices = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesleftText = document.getElementById("guessesleft-text");
var guessessofarText = document.getElementById("guessessofar-text");


document.onkeyup = function (event) {

    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    if (options.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins++;
            numGuess = 10;
            guessChoices = [];
        }

        if (userGuess != computerGuess) {
            numGuess--;
            guessChoices.push(userGuess);
        }

        if (numGuess === 0) {
            numGuess = 10;
            losses++;
            guessChoices = [];
        }
    }

    // Display the user and computer guesses, and wins/losses/ties.
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesleftText.textContent = "Number of Guess left: " + numGuess;
    guessessofarText.textContent = "Your guesses so far: " + guessChoices;
};

