let wordLetters     = ['F', 'O', 'X'];
let guessedLetters  = ['_', '_', '_'];

function guessLetter(letter) {
    let correctGuess = false;
    let wrongGuess = false;
    for (let i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i] == letter) {
            guessedLetters[i] = letter;
            correctGuess = true;
        }
        if (guessedLetters[i] == '_') {
            wrongGuess = true;
        }
    }
    if (correctGuess) {
        console.log('Yes, indeed!');
        console.log(guessedLetters.join(''));
        if (!wrongGuess) {
            console.log('YOU WON!');
        } 
    } else {
        console.log('Ups, try again!');
    }
}

guessLetter('T');
guessLetter('I');
guessLetter('O');
guessLetter('F');
guessLetter('X'); 