"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            // PRIVATE INSTANCE MEMBERS
            _this._playerMoney = 1000;
            _this._turn = 0;
            _this._jackpot = 5000;
            _this._win = 0;
            _this._lost = 0;
            _this._winRate = 0;
            _this._bet = 25;
            _this._betLine = [" ", " ", " "];
            _this._reel = [];
            _this._grapes = 0;
            _this._bananas = 0;
            _this._oranges = 0;
            _this._cherries = 0;
            _this._bars = 0;
            _this._bells = 0;
            _this._sevens = 0;
            _this._blanks = 0;
            _this._winnings = 0;
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        Play.prototype.Start = function () {
            this._reel[0] = new objects.Reel(config.Game.ASSETS.getResult("lul"), 40, 165, false);
            this._reel[1] = new objects.Reel(config.Game.ASSETS.getResult("lul"), 250, 165, false);
            this._reel[2] = new objects.Reel(config.Game.ASSETS.getResult("lul"), 460, 165, false);
            this._moneyLabel = new objects.Label(30, 25, "Yellow");
            this._jackpotLabel = new objects.Label(230, 55, "Yellow");
            this._turnLabel = new objects.Label(30, 55, "Yellow");
            this._winLabel = new objects.Label(30, 85, "Yellow");
            this._lossLabel = new objects.Label(230, 85, "Yellow");
            this._winRatio = new objects.Label(30, 115, "Yellow");
            this._betAmount = new objects.Label(230, 115, "Yellow");
            this._result = new objects.Label(530, 80, "Yellow", true, " ", "19px");
            this._reelFrame = new objects.Reel(config.Game.ASSETS.getResult("reel"), 0, 155, false);
            this._spinButton = new objects.Button(config.Game.ASSETS.getResult("spinButton"), 320, 400, true);
            this._betButton = new objects.Button(config.Game.ASSETS.getResult("betButton"), 120, 400, true);
            this._quitButton = new objects.Button(config.Game.ASSETS.getResult("quitButton"), 520, 400, true);
            this._moneyLabel.setText("Player Money: " + this._playerMoney);
            this._jackpotLabel.setText("Jackpot: " + this._jackpot);
            this._turnLabel.setText("Turn: " + this._turn);
            this._winLabel.setText("Wins: " + this._win);
            this._lossLabel.setText("Losses: " + this._lost);
            this._winRatio.setText("Win Ratio: 0.00%");
            this._betAmount.setText("Bet: " + this._bet);
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.resetFruitTally = function () {
            this._grapes = 0;
            this._bananas = 0;
            this._oranges = 0;
            this._cherries = 0;
            this._bars = 0;
            this._bells = 0;
            this._sevens = 0;
            this._blanks = 0;
        };
        Play.prototype.Main = function () {
            this.addChild(this._jackpotLabel);
            this.addChild(this._moneyLabel);
            this.addChild(this._turnLabel);
            this.addChild(this._winLabel);
            this.addChild(this._lossLabel);
            this.addChild(this._winRatio);
            this.addChild(this._betAmount);
            this.addChild(this._result);
            this.addChild(this._reel[0]);
            this.addChild(this._reel[1]);
            this.addChild(this._reel[2]);
            this.addChild(this._reelFrame);
            this.addChild(this._betButton);
            this.addChild(this._spinButton);
            this.addChild(this._quitButton);
            this._spinButton.on("click", this.Spin.bind(this));
            this._betButton.on("click", this.Bet.bind(this));
            this._quitButton.on("click", this.Quit.bind(this));
        };
        Play.prototype.checkRange = function (value, lowerBounds, upperBounds) {
            if (value >= lowerBounds && value <= upperBounds) {
                return value;
            }
            else {
                return !value;
            }
        };
        Play.prototype.Reels = function () {
            var outCome = [0, 0, 0];
            for (var spin = 0; spin < 3; spin++) {
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
                switch (outCome[spin]) {
                    case this.checkRange(outCome[spin], 1, 27): // blank 41.5% probability
                        this._betLine[spin] = "blank";
                        this._reel[spin].ChangeImage(0);
                        this._blanks++;
                        break;
                    case this.checkRange(outCome[spin], 28, 37): // grapes 15.4% probability
                        this._betLine[spin] = "Grapes";
                        this._reel[spin].ChangeImage(1);
                        this._grapes++;
                        break;
                    case this.checkRange(outCome[spin], 38, 46): // banana 13.8% probability
                        this._betLine[spin] = "Banana";
                        this._reel[spin].ChangeImage(2);
                        this._bananas++;
                        break;
                    case this.checkRange(outCome[spin], 47, 54): // orange 12.3% probability
                        this._betLine[spin] = "Orange";
                        this._reel[spin].ChangeImage(3);
                        this._oranges++;
                        break;
                    case this.checkRange(outCome[spin], 55, 59): // cherry  7.7% probability
                        this._betLine[spin] = "Cherry";
                        this._reel[spin].ChangeImage(4);
                        this._cherries++;
                        break;
                    case this.checkRange(outCome[spin], 60, 62): // bar 4.6% probability
                        this._betLine[spin] = "Bar";
                        this._reel[spin].ChangeImage(5);
                        this._bars++;
                        break;
                    case this.checkRange(outCome[spin], 63, 64): // bell 3.1% probability
                        this._betLine[spin] = "Bell";
                        this._reel[spin].ChangeImage(6);
                        this._bells++;
                        break;
                    case this.checkRange(outCome[spin], 65, 65): // seven 1.5% probability
                        this._betLine[spin] = "Seven";
                        this._reel[spin].ChangeImage(7);
                        this._sevens++;
                        break;
                }
            }
        };
        Play.prototype.determineWinnings = function () {
            if (this._blanks == 0) {
                if (this._grapes == 3) {
                    this._winnings = this._bet * 10;
                }
                else if (this._bananas == 3) {
                    this._winnings = this._bet * 20;
                }
                else if (this._oranges == 3) {
                    this._winnings = this._bet * 30;
                }
                else if (this._cherries == 3) {
                    this._winnings = this._bet * 40;
                }
                else if (this._bars == 3) {
                    this._winnings = this._bet * 50;
                }
                else if (this._bells == 3) {
                    this._winnings = this._bet * 75;
                }
                else if (this._sevens == 3) {
                    this._winnings = this._bet * 100;
                }
                else if (this._grapes == 2) {
                    this._winnings = this._bet * 2;
                }
                else if (this._bananas == 2) {
                    this._winnings = this._bet * 2;
                }
                else if (this._oranges == 2) {
                    this._winnings = this._bet * 3;
                }
                else if (this._cherries == 2) {
                    this._winnings = this._bet * 4;
                }
                else if (this._bars == 2) {
                    this._winnings = this._bet * 5;
                }
                else if (this._bells == 2) {
                    this._winnings = this._bet * 10;
                }
                else if (this._sevens == 2) {
                    this._winnings = this._bet * 20;
                }
                else if (this._sevens == 1) {
                    this._winnings = this._bet * 5;
                }
                else {
                    this._winnings = this._bet * 1;
                }
                this._win++;
                var winSound = createjs.Sound.play("win");
                winSound.volume = 0.3;
                this.showWinMessage();
            }
            else {
                this._lost++;
                var lostSound = createjs.Sound.play("lose");
                lostSound.volume = 0.3;
                this.showLossMessage();
            }
        };
        /* Check to see if the player won the jackpot */
        Play.prototype.checkJackPot = function () {
            /* compare two random values */
            var jackPotTry = Math.floor(Math.random() * 51 + 1);
            var jackPotWin = Math.floor(Math.random() * 51 + 1);
            if (jackPotTry == jackPotWin) {
                this._result.setText("Jackpot!! $" + this._jackpot + " ");
                this._playerMoney += this._jackpot;
                this._jackpot = 1000;
                var jackpotSound = createjs.Sound.play("noice");
                jackpotSound.volume = 0.75;
            }
        };
        /* Utility function to show a win message and increase player money */
        Play.prototype.showWinMessage = function () {
            this._playerMoney += this._winnings;
            this._result.setText("You Won: $" + this._winnings);
            this.checkJackPot();
            this.resetFruitTally();
        };
        /* Utility function to show a loss message and reduce player money */
        Play.prototype.showLossMessage = function () {
            this._playerMoney -= this._bet;
            this._result.setText("You Lost!");
            this.resetFruitTally();
        };
        Play.prototype.Spin = function () {
            if (this._playerMoney == 0) {
                this.resetAll();
                var brokeSound = createjs.Sound.play("broke");
                brokeSound.volume = 0.5;
                config.Game.SCENE_STATE = scenes.State.END;
            }
            else if (this._bet > this._playerMoney) {
                this._result.setText("Not enough money");
            }
            else if (this._bet <= this._playerMoney) {
                this.Reels();
                this.determineWinnings();
                this._turn++;
                this.playerStats();
            }
        };
        Play.prototype.playerStats = function () {
            this._winRate = this._win / this._turn;
            this._moneyLabel.setText("Player Money: " + this._playerMoney);
            this._jackpotLabel.setText("Jackpot: " + this._jackpot);
            this._turnLabel.setText("Turn: " + this._turn);
            this._winLabel.setText("Wins: " + this._win);
            this._lossLabel.setText("Losses: " + this._lost);
            this._winRatio.setText("Win Ratio: " + (this._winRate * 100).toFixed(2) + "%");
            this._betAmount.setText("Bet: " + this._bet);
        };
        Play.prototype.resetAll = function () {
            this._playerMoney = 1000;
            this._win = 0;
            this._jackpot = 5000;
            this._turn = 0;
            this._bet = 25;
            this._win = 0;
            this._lost = 0;
            this._winRate = 0;
            this.playerStats();
        };
        Play.prototype.Bet = function () {
            var betSound = createjs.Sound.play("bet");
            betSound.volume = 0.5;
            if (this._bet < 100) {
                this._bet += 25;
            }
            else if (this._bet < 500) {
                this._bet += 100;
            }
            else if (this._bet == 500) {
                this._bet = 25;
            }
            if (this._bet > this._playerMoney) {
            }
            this._betAmount.setText("Bet: " + this._bet);
        };
        Play.prototype.Quit = function () {
            this.resetAll();
            config.Game.SCENE_STATE = scenes.State.START;
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map