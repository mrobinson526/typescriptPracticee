document.addEventListener('DOMContentLoaded', function() {
    let addButton = document.createElement('button');
        addButton.innerText = 'Add Dice';
        addButton.id="addDice";
    document.body.appendChild(addButton)

    let rollButton = document.createElement('button');
        rollButton.innerText="Roll Dice";
        rollButton.id="rollDice";
    document.body.appendChild(rollButton);
    
    let sumButton = document.createElement('button');
        sumButton.innerText ="Sum Die";
        sumButton.id = 'sumDice';
    document.body.appendChild(sumButton);

    const diceContainer = document.getElementById('diceContainer');
    const addDice = document.getElementById("addDice");
    const rollDice = document.getElementById('rollDice');
    const sumDice = document.getElementById('sumDice');

    let diceArr: [] = [];
    let uniArray = [`\u2680`, `\u2681`, `\u2682`, `\u2683`, `\u2684`, `\u2685`];


class Die {
    value: any;
    die: HTMLDivElement
    dice: HTMLDivElement;
    static diceArr: any;
    
    constructor() {
        this.value = this.roll();
        this.dice = document.createElement("div");
        this.value = (Math.floor(Math.random() * 6) +1);
        this.dice.className = 'dice';
        if(this.value == 1) {
            this.dice.textContent = uniArray[this.value - 1]
        
        } else if (this.value == 2) {
            this.dice.textContent = uniArray[this.value -1]
        } else if (this.value == 3) {
            this.dice.textContent = uniArray[this.value -1] 
        } else if (this.value == 4) {
            this.dice.textContent = uniArray[this.value -1]
        } else if (this.value == 5) {
        this.dice.textContent = uniArray[this.value -1]
        } else if (this.value == 6) {
            this.dice.textContent = uniArray[this.value -1]
    }
    diceArr:[].push(this);
    console.log(diceArr)
    diceContainer.appendChild(this.dice);
    this.dice.addEventListener('click', () => this.roll())
    this.dice.addEventListener("dblclick", () => {
        diceContainer.removeChild(this.dice);
        let index = Die.diceArr.indexOf(this);
        diceArr.splice(index, 1)
    })
};

    roll = () => {
        throw new Error("Method not implemented.");
        this.value = (Math.floor(Math.random() * 6) + 1);
        if(this.value == 1) {
            this.dice.textContent = uniArray[this.value - 1]
        } else if (this.value == 2) {
            this.dice.textContent = uniArray[this.value -1]
        } else if (this.value == 3) {
            this.dice.textContent = uniArray[this.value -1] 
        } else if (this.value == 4) {
            this.dice.textContent = uniArray[this.value -1]
        } else if (this.value == 5) {
        this.dice.textContent = uniArray[this.value -1]
        } else if (this.value == 6) {
            this.dice.textContent = uniArray[this.value -1]
    }
    };
};
    addDice.addEventListener("click", () => {
        new Die();
    });
    rollDice.addEventListener("click", () => {
        diceArr.forEach(dice => {
           this.dice.roll();
        });
    });
    sumDice.addEventListener("click", () => {
        let sum = 0;
        diceArr.forEach(DiceRoll => {
            sum += this.DiceRoll.value
        });
        alert(sum)
    });
})
