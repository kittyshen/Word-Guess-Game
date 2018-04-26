# Word-Guess-Game
UC Berkeley coding assignment 3

## Assignment requirement
1. Choose a theme for your game! You can choose any subject for your theme, though, so be creative!
2. Use key events to listen for the letters that your players will type.
3. Display the following on the page:
4. Press any key to get started!
5. Wins: (# of times user guessed the word correctly).
   * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
   * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.
6. Number of Guesses Remaining: (# of guesses remaining for the user).
7. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).
8. After the user wins/loses the game should automatically choose another word and make the user play it.

##Technology used
JavaScript, Html, Css, Bootstrap framework.

## Key learning points
```javascript
document.onkeyup = function(event) {
    var userInput = event.key;
    ...
    ...
}
```  
* to capture the user input and store it in a variable

```javascript
 var validLetters = /^[A-Za-z]+$/;
    //Check whether user entered a valid letter between a-z
    if (userInput.match(validLetters){ ... }
```
* to validate the user input 

```javascript
Array.push(userInput);
```
* to push additional elements into an array.

```javascript
currentWordSplited = currentWord.split("");
```
* to split an array

```javascript
if (guessedWord.indexOf("_ ") == -1){ ...}
```
* to check whether an array contain certain string

```javascript
document.getElementById("countLeft").innerHTML = Count-1;
```
* to get access to a pre-defined ID in html file and use innerHTML to update the content.

* better define a function to reset everything after one circle finished


## Installation
Download the zip file, unzip on the desktop, open index.html

## Link to the site
[Click me](https://kittyshen.github.io/Word-Guess-Game/)

## Author 
[Kitty Shen ](https://github.com/kittyshen)

https://github.com/kittyshen

## License
Standard MIT License
