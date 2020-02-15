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
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.grapes = 0;
            _this.bananas = 0;
            _this.oranges = 0;
            _this.cherries = 0;
            _this.bars = 0;
            _this.bells = 0;
            _this.sevens = 0;
            _this.blanks = 0;
            _this.winnings = 0;
            _this.playerBet = 10;
            // initialization
            _this.reel = new objects.Label();
            _this.nextButton = new objects.Button();
            _this.moneyLabel = new objects.Label();
            _this.jackpotLabel = new objects.Label();
            _this.turnLabel = new objects.Label();
            _this.winLabel = new objects.Label();
            _this.lossLabel = new objects.Label();
            _this.winRatio = new objects.Label();
            _this.result = new objects.Label("", "19px");
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        Play.prototype.Start = function () {
            this.moneyLabel.x = 100;
            this.moneyLabel.y = 100;
            this.jackpotLabel.x = 100;
            this.jackpotLabel.y = 110;
            this.turnLabel.x = 100;
            this.turnLabel.y = 120;
            this.winLabel.x = 100;
            this.winLabel.y = 130;
            this.lossLabel.x = 100;
            this.lossLabel.y = 140;
            this.winRatio.x = 100;
            this.winRatio.y = 150;
            this.result.x = 100;
            this.result.y = 170;
            this.moneyLabel.setText("Player Money: " + config.Game.PLAYER_MONEY);
            this.jackpotLabel.setText("Jackpot: " + 5000);
            this.turnLabel.setText("Turn: " + config.Game.TURN);
            this.winLabel.setText("Wins: " + config.Game.WIN);
            this.lossLabel.setText("Losses: " + config.Game.LOST);
            this.winRatio.setText("Ratio: " + 0);
            this.reel = new objects.Label("Spin to Win", "40px", "Consolas", "#000000", 320, 200, true);
            this.nextButton = new objects.Button("./Assets/images/nextButton.png", 320, 400, true);
            this.nextButton.x = 320;
            this.nextButton.y = 340;
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.resetFruitTally = function () {
            this.grapes = 0;
            this.bananas = 0;
            this.oranges = 0;
            this.cherries = 0;
            this.bars = 0;
            this.bells = 0;
            this.sevens = 0;
            this.blanks = 0;
        };
        Play.prototype.Main = function () {
            this.addChild(this.jackpotLabel);
            this.addChild(this.moneyLabel);
            this.addChild(this.turnLabel);
            this.addChild(this.winLabel);
            this.addChild(this.lossLabel);
            this.addChild(this.winRatio);
            this.addChild(this.result);
            config.Game.PLAYER_MONEY = 1000;
            this.addChild(this.reel);
            this.addChild(this.nextButton);
            this.nextButton.on("click", this.Spin.bind(this));
        };
        /* Utility function to check if a value falls within a range of bounds */
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
                    case this.checkRange(outCome[spin], 1, 27): // 41.5% probability
                        config.Game.BETLINE[spin] = "blank";
                        this.blanks++;
                        break;
                    case this.checkRange(outCome[spin], 28, 37): // 15.4% probability
                        config.Game.BETLINE[spin] = "Grapes";
                        this.grapes++;
                        break;
                    case this.checkRange(outCome[spin], 38, 46): // 13.8% probability
                        config.Game.BETLINE[spin] = "Banana";
                        this.bananas++;
                        break;
                    case this.checkRange(outCome[spin], 47, 54): // 12.3% probability
                        config.Game.BETLINE[spin] = "Orange";
                        this.oranges++;
                        break;
                    case this.checkRange(outCome[spin], 55, 59): //  7.7% probability
                        config.Game.BETLINE[spin] = "Cherry";
                        this.cherries++;
                        break;
                    case this.checkRange(outCome[spin], 60, 62): //  4.6% probability
                        config.Game.BETLINE[spin] = "Bar";
                        this.bars++;
                        break;
                    case this.checkRange(outCome[spin], 63, 64): //  3.1% probability
                        config.Game.BETLINE[spin] = "Bell";
                        this.bells++;
                        break;
                    case this.checkRange(outCome[spin], 65, 65): //  1.5% probability
                        config.Game.BETLINE[spin] = "Seven";
                        this.sevens++;
                        break;
                }
            }
        };
        Play.prototype.determineWinnings = function () {
            if (this.blanks == 0) {
                if (this.grapes == 3) {
                    this.winnings = this.playerBet * 10;
                }
                else if (this.bananas == 3) {
                    this.winnings = this.playerBet * 20;
                }
                else if (this.oranges == 3) {
                    this.winnings = this.playerBet * 30;
                }
                else if (this.cherries == 3) {
                    this.winnings = this.playerBet * 40;
                }
                else if (this.bars == 3) {
                    this.winnings = this.playerBet * 50;
                }
                else if (this.bells == 3) {
                    this.winnings = this.playerBet * 75;
                }
                else if (this.sevens == 3) {
                    this.winnings = this.playerBet * 100;
                }
                else if (this.grapes == 2) {
                    this.winnings = this.playerBet * 2;
                }
                else if (this.bananas == 2) {
                    this.winnings = this.playerBet * 2;
                }
                else if (this.oranges == 2) {
                    this.winnings = this.playerBet * 3;
                }
                else if (this.cherries == 2) {
                    this.winnings = this.playerBet * 4;
                }
                else if (this.bars == 2) {
                    this.winnings = this.playerBet * 5;
                }
                else if (this.bells == 2) {
                    this.winnings = this.playerBet * 10;
                }
                else if (this.sevens == 2) {
                    this.winnings = this.playerBet * 20;
                }
                else if (this.sevens == 1) {
                    this.winnings = this.playerBet * 5;
                }
                else {
                    this.winnings = this.playerBet * 1;
                }
                config.Game.WIN++;
                this.showWinMessage();
            }
            else {
                config.Game.LOST++;
                this.showLossMessage();
            }
        };
        /* Check to see if the player won the jackpot */
        Play.prototype.checkJackPot = function () {
            /* compare two random values */
            var jackPotTry = Math.floor(Math.random() * 51 + 1);
            var jackPotWin = Math.floor(Math.random() * 51 + 1);
            if (jackPotTry == jackPotWin) {
                this.result.setText("You Won the $" + config.Game.JACKPOT + " Jackpot!!");
                config.Game.PLAYER_MONEY += config.Game.JACKPOT;
                config.Game.JACKPOT = 1000;
            }
        };
        /* Utility function to show a win message and increase player money */
        Play.prototype.showWinMessage = function () {
            console.log(this.winnings);
            console.log(config.Game.PLAYER_MONEY);
            config.Game.PLAYER_MONEY += this.winnings;
            this.result.setText("You Won:" + this.winnings + " $");
            this.checkJackPot();
            this.resetFruitTally();
        };
        /* Utility function to show a loss message and reduce player money */
        Play.prototype.showLossMessage = function () {
            this.result.setText("You Lost!");
            this.resetFruitTally();
        };
        Play.prototype.Spin = function () {
            config.Game.PLAYER_MONEY -= 10;
            if (config.Game.PLAYER_MONEY == 0) {
                if (confirm("You ran out of Money! \nDo you want to play again?")) {
                    this.resetAll();
                }
            }
            else {
                this.Reels();
                var fruits = config.Game.BETLINE[0] + " - " + config.Game.BETLINE[1] + " - " + config.Game.BETLINE[2];
                this.reel.setText(fruits);
                this.determineWinnings();
                config.Game.TURN++;
                this.showPlayerStats();
            }
        };
        Play.prototype.showPlayerStats = function () {
            config.Game.WIN_RATE = config.Game.WIN / config.Game.TURN;
            this.moneyLabel.setText("Player Money: " + config.Game.PLAYER_MONEY);
            this.jackpotLabel.setText("Jackpot: " + config.Game.JACKPOT);
            this.turnLabel.setText("Turn: " + config.Game.TURN);
            this.winLabel.setText("Wins: " + config.Game.WIN);
            this.lossLabel.setText("Losses: " + config.Game.LOST);
            this.winRatio.setText("Win Ratio: " + (config.Game.WIN_RATE * 100).toFixed(2) + "%");
        };
        Play.prototype.resetAll = function () {
            config.Game.PLAYER_MONEY = 1000;
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map