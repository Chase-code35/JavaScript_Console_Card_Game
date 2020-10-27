const Card = require('./Card.js');
const Effect = require('./Effect.js');
const Unit = require('./Unit.js');

const CardUnit1 = new Unit("Red Belt Ninja", 3, 3, 4);
const CardUnit2 = new Unit("Black Belt Ninja", 4, 5, 4);

const CardEffect1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", "+3");
const CardEffect2 = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 3", "resilience", "-3");
const CardEffect3 = new Effect("Pair Programming", 3, "increase target's power by 2", "power", "+2");

// Player 1

// summons:
console.log()
console.log("Player 1 summons 'Red Belt Ninja'");
console.log(CardUnit1);
console.log()

// plays:
console.log("Player 1 plays 'Hard Algorithm' on 'Red Belt Ninja'");
CardEffect1.applyEffect_HardAlgo(CardUnit1);
console.log()

// Player 2

// summons:
console.log("Player 2 summons 'Black Belt Ninja'");
console.log(CardUnit2);
console.log()

// plays:
console.log("Player 2 plays 'Unhandled Promise Rejection' on 'Red Belt Ninja'");
CardEffect2.applyEffect_PromiseRej(CardUnit1);
console.log()

// Player 1

// plays:
console.log("Player 1 plays 'Pair Programming' on 'Red Belt Ninja'");
CardEffect3.applyEffect_PairProg(CardUnit1);
console.log()

// attack!:
console.log("Player 1 has 'Red Belt Ninja' attack 'Black Belt Ninja'");
CardUnit1.attack(CardUnit2);