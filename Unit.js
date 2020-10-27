const Card = require('./Card.js')

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        //reduce target res by power
        var newRes = target.res - this.power;
        if (newRes < 0) {
            newRes = 0
        }
        target.res = newRes;
        console.log(`Unit Card ${target.name}'s resilience is now ${target.res}.`);
        console.log(target);
    }
}

module.exports = Unit;