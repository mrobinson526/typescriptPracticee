document.addEventListener('DOMContentLoaded', function () {
    var _this = this;
    var addButton = document.createElement('button');
    addButton.innerText = 'Add Dice';
    addButton.id = "addDice";
    document.body.appendChild(addButton);
    var rollButton = document.createElement('button');
    rollButton.innerText = "Roll Dice";
    rollButton.id = "rollDice";
    document.body.appendChild(rollButton);
    var sumButton = document.createElement('button');
    sumButton.innerText = "Sum Die";
    sumButton.id = 'sumDice';
    document.body.appendChild(sumButton);
    var diceContainer = document.getElementById('diceContainer');
    var addDice = document.getElementById("addDice");
    var rollDice = document.getElementById('rollDice');
    var sumDice = document.getElementById('sumDice');
    var diceArr = [];
    var uniArray = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];
    var Die = /** @class */ (function () {
        function Die() {
            var _this = this;
            this.roll = function () {
                throw new Error("Method not implemented.");
                _this.value = (Math.floor(Math.random() * 6) + 1);
                if (_this.value == 1) {
                    _this.dice.textContent = uniArray[_this.value - 1];
                }
                else if (_this.value == 2) {
                    _this.dice.textContent = uniArray[_this.value - 1];
                }
                else if (_this.value == 3) {
                    _this.dice.textContent = uniArray[_this.value - 1];
                }
                else if (_this.value == 4) {
                    _this.dice.textContent = uniArray[_this.value - 1];
                }
                else if (_this.value == 5) {
                    _this.dice.textContent = uniArray[_this.value - 1];
                }
                else if (_this.value == 6) {
                    _this.dice.textContent = uniArray[_this.value - 1];
                }
            };
            this.value = this.roll();
            this.dice = document.createElement("div");
            this.value = (Math.floor(Math.random() * 6) + 1);
            this.dice.className = 'dice';
            if (this.value == 1) {
                this.dice.textContent = uniArray[this.value - 1];
            }
            else if (this.value == 2) {
                this.dice.textContent = uniArray[this.value - 1];
            }
            else if (this.value == 3) {
                this.dice.textContent = uniArray[this.value - 1];
            }
            else if (this.value == 4) {
                this.dice.textContent = uniArray[this.value - 1];
            }
            else if (this.value == 5) {
                this.dice.textContent = uniArray[this.value - 1];
            }
            else if (this.value == 6) {
                this.dice.textContent = uniArray[this.value - 1];
            }
            diceArr: [].push(this);
            console.log(diceArr);
            diceContainer.appendChild(this.dice);
            this.dice.addEventListener('click', function () { return _this.roll(); });
            this.dice.addEventListener("dblclick", function () {
                diceContainer.removeChild(_this.dice);
                var index = Die.diceArr.indexOf(_this);
                diceArr.splice(index, 1);
            });
        }
        ;
        return Die;
    }());
    ;
    addDice.addEventListener("click", function () {
        new Die();
    });
    rollDice.addEventListener("click", function () {
        diceArr.forEach(function (dice) {
            _this.dice.roll();
        });
    });
    sumDice.addEventListener("click", function () {
        var sum = 0;
        diceArr.forEach(function (DiceRoll) {
            sum += _this.DiceRoll.value;
        });
        alert(sum);
    });
});
