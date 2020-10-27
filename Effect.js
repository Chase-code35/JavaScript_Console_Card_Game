const Card = require('./Card.js')

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    applyEffect_HardAlgo(target) {
        // increase targets res by 3
        var newRes = target.res + 3;
        target.res = newRes;
        console.log(`Unit Card ${target.name}'s new resilience is ${target.res}.`);
        console.log(target);
    }

    applyEffect_PromiseRej(target) {
        // decrease targets res by 3
        var newRes = target.res - 3;
        target.res = newRes;
        console.log(`Unit Card ${target.name}'s new resilience is ${target.res}.`);
        console.log(target);
    }

    applyEffect_PairProg(target) {
        // increase targets power by 2
        var newPower = target.power + 2;
        target.power = newPower;
        console.log(`Unit Card ${target.name}'s new power is ${target.power}.`);
        console.log(target);
    }
}

module.exports = Effect;