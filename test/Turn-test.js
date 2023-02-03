const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn')

describe('Turn', function() {

    it('should be a function', function() {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
    });
    it('should store a user guess', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);
        expect(turn.userGuess).to.deep.equal('pug');
    });
    it('should store current instance of card', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);
        expect(turn.currentCard).to.deep.equal(card);
    });
    it('should return a user guess', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);
        expect(turn.returnGuess()).to.deep.equal('pug');
    });
    it('should return current card', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);
        expect(turn.returnCard()).to.deep.equal(card);
    });
    it('should return true if answer is true', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('sea otter', card);
        expect(turn.evaluate()).to.equal(true);
    });
    it('should return false if answer is false', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);
        expect(turn.evaluate()).to.equal(false);
    });
    it('should return statement if answer is correct', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('sea otter', card);
        expect(turn.giveFeedback()).to.deep.equal('this is correct!');
    });
    it('should return statement if answer is incorrect', function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);
        expect(turn.giveFeedback()).to.deep.equal('this is incorrect!');
    });
});