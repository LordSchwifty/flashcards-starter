const Card = require("./Card")

class Turn {
    constructor(userGuess, currentCard) {
        this.userGuess = userGuess
        this.currentCard = currentCard
    }
    returnGuess() {
        return this.userGuess
    }
    returnCard() {
        return this.currentCard
    }
    evaluate() {
        if(this.userGuess === this.currentCard.correctAnswer){
            return true
     } else {
            return false
     }
    }
    giveFeedback() {
         if(this.userGuess === this.currentCard.correctAnswer){
        return `this is correct!`
 } else {
        return `this is incorrect!`
 }
 }
}

module.exports = Turn;