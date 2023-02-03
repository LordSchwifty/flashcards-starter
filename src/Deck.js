class Deck {
    constructor(deck) {
        this.deck = deck
        this.cardCount = []
    }
    storeCard(card) {
        this.cardCount.push(card)
    }
}
module.exports = Deck;