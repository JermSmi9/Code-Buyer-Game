const tickRate = 200 / 30; // 30 frames per second(fps)
let score = 1000;

// Buildings are made from classes here.
// Building(name, clicks per second, base cost, button ID)
let cursor = new Building('Cursor', 0.1, 15, 'buySingleCursor');
let energyDrink = new Building('Energy Drink', 1, 100, 'buyEnergyDrink');
let tendies = new Building('Tendies', 8, 1100, 'buyTendies');
let stonks = new Building('Stonks', 47, 12000, 'buyStonks');
let games= new Building ('Games', 20, 30000, 'buyGames');
let pins = new Building('Pins', 32, 130000, 'buyPins');
let fries = new Building('Fries', 14, 2000, 'buyFries');
let coke = new Building ('Coke', 13, 500, 'buyCoke');

// Manual click function
function scorePlusPlus() {
    score++;
}

// Increases the score by the current clicks-per-second
function incScore() {
    score += cursor.cps + energyDrink.cps + tendies.cps + stonks.cps + games.cps + pins.cps + fries.cps + coke.cps;
}

// Updates the states of all the Building buttons
function updateButtons() {
    cursor.buttonState();
    energyDrink.buttonState();
    tendies.buttonState();
    stonks.buttonState();
    games.buttonState();
    pins.buttonState();
    fries.buttonState();
    coke.buttonState();
}

// Everything in the following function updates every tick as set at the top
function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        Math.floor(score).toLocaleString();
}
setInterval(updatePage, tickRate);
