module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        spinButton:objects.Button;
        betButton:objects.Button;
        quitButton:objects.Button;
        moneyLabel:objects.Label;
        jackpotLabel:objects.Label;
        turnLabel:objects.Label;
        winLabel:objects.Label;
        lossLabel:objects.Label;
        winRatio:objects.Label;
        result:objects.Label;
        betAmount:objects.Label;
        reelBackground:objects.Reel;
        reelGrapes:objects.Reel;
        reelBananas:objects.Reel;
        reelOranges:objects.Reel;
        reelCherries:objects.Reel;
        reelBars:objects.Reel;
        reelBells:objects.Reel;
        reelSevens:objects.Reel;
        reelBlanks:objects.Reel;
        test:objects.Reel[] = [];
        
        // PUBLIC PROPERTIES
        grapes = 0;
        bananas = 0;
        oranges = 0;
        cherries = 0;
        bars = 0;
        bells = 0;
        sevens = 0;
        blanks = 0;
        winnings = 0;
        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this.moneyLabel = new objects.Label(10,10);
            this.jackpotLabel = new objects.Label(10,20);
            this.turnLabel = new objects.Label(10,30);
            this.winLabel = new objects.Label(10,40);
            this.lossLabel = new objects.Label(10,50);
            this.winRatio = new objects.Label(10,60);
            this.betAmount = new objects.Label(10,70);
            this.result = new objects.Label(320, 100, true, " ","19px");
            this.test[0] = new objects.Reel(config.Game.ASSETS.getResult("lul"),40, 130, false);
            this.test[1] = new objects.Reel(config.Game.ASSETS.getResult("lul"),250, 130, false);
            this.test[2] = new objects.Reel(config.Game.ASSETS.getResult("lul"),460, 130, false);
            this.reelBackground = new objects.Reel(config.Game.ASSETS.getResult("reel"), 0, 120, false);
            this.reelBlanks = new objects.Reel(config.Game.ASSETS.getResult("Blank"));
            this.reelGrapes = new objects.Reel(config.Game.ASSETS.getResult("Grapes"));
            this.reelOranges = new objects.Reel(config.Game.ASSETS.getResult("Orange"));
            this.reelBananas = new objects.Reel(config.Game.ASSETS.getResult("Banana"));
            this.reelCherries = new objects.Reel(config.Game.ASSETS.getResult("Cherry"));
            this.reelBars = new objects.Reel(config.Game.ASSETS.getResult("Bar"));
            this.reelBells = new objects.Reel(config.Game.ASSETS.getResult("Bell"));
            this.reelSevens = new objects.Reel(config.Game.ASSETS.getResult("Seven"));
            this.spinButton = new objects.Button(config.Game.ASSETS.getResult("spinButton"), 320, 400, true);
            this.betButton = new objects.Button(config.Game.ASSETS.getResult("betButton"), 120, 400, true);
            this.quitButton = new objects.Button(config.Game.ASSETS.getResult("quitButton"), 520, 400, true);
            this.moneyLabel.setText("Player Money: "+ config.Game.PLAYER_MONEY);
            this.jackpotLabel.setText("Jackpot: "+ config.Game.JACKPOT);
            this.turnLabel.setText("Turn: "+ config.Game.TURN);
            this.winLabel.setText("Wins: "+ config.Game.WIN);
            this.lossLabel.setText("Losses: "+ config.Game.LOST);
            this.winRatio.setText("Win Ratio: 0.00%");
            this.betAmount.setText("Bet: " + config.Game.BET);
            this.Main();
        }        
        
        public Update(): void 
        {
        }
        
        public resetFruitTally() {
            this.grapes = 0;
            this.bananas = 0;
            this.oranges = 0;
            this.cherries = 0;
            this.bars = 0;
            this.bells = 0;
            this.sevens = 0;
            this.blanks = 0;
        }
        public Main(): void {
            
            this.addChild(this.jackpotLabel);
            this.addChild(this.moneyLabel);
            this.addChild(this.turnLabel);
            this.addChild(this.winLabel);
            this.addChild(this.lossLabel);
            this.addChild(this.winRatio);
            this.addChild(this.betAmount);
            this.addChild(this.result);
            this.addChild(this.test[0]);
            this.addChild(this.test[1]);
            this.addChild(this.test[2]);
            this.addChild(this.reelBackground);
            this.addChild(this.betButton);
            this.addChild(this.spinButton);
            this.addChild(this.quitButton);
    
            this.spinButton.on("click", this.Spin.bind(this));
            this.betButton.on("click", this.Bet.bind(this));
            this.quitButton.on("click", this.Quit.bind(this));
        }
        
        /* Utility function to check if a value falls within a range of bounds */
        public checkRange(value: number, lowerBounds: number, upperBounds: number) {
            if (value >= lowerBounds && value <= upperBounds)
            {
                return value;
            }
            else {
                return !value;
            }
        }

        public Reels() {
            let outCome = [0, 0, 0];
            for (let spin = 0; spin < 3; spin++) {
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
                switch (outCome[spin]) {
                    case this.checkRange(outCome[spin], 1, 27):  // 41.5% probability
                        config.Game.BETLINE[spin] = "blank";
                        this.test[spin].image = this.reelBlanks.image;
                        this.blanks++;
                        break;
                    case this.checkRange(outCome[spin], 28, 37): // 15.4% probability
                        config.Game.BETLINE[spin] = "Grapes";
                        this.test[spin].image = this.reelGrapes.image;
                        this.grapes++;
                        break;
                    case this.checkRange(outCome[spin], 38, 46): // 13.8% probability
                        config.Game.BETLINE[spin] = "Banana";
                        this.test[spin].image = this.reelBananas.image;
                        this.bananas++;
                        break;
                    case this.checkRange(outCome[spin], 47, 54): // 12.3% probability
                        config.Game.BETLINE[spin] = "Orange";
                        this.test[spin].image = this.reelOranges.image;
                        this.oranges++;
                        break;
                    case this.checkRange(outCome[spin], 55, 59): //  7.7% probability
                        config.Game.BETLINE[spin] = "Cherry";
                        this.test[spin].image = this.reelCherries.image;
                        this.cherries++;
                        break;
                    case this.checkRange(outCome[spin], 60, 62): //  4.6% probability
                        config.Game.BETLINE[spin] = "Bar";
                        this.test[spin].image = this.reelBars.image;
                        this.bars++;
                        break;
                    case this.checkRange(outCome[spin], 63, 64): //  3.1% probability
                        config.Game.BETLINE[spin] = "Bell";
                        this.test[spin].image = this.reelBells.image;
                        this.bells++;
                        break;
                    case this.checkRange(outCome[spin], 65, 65): //  1.5% probability
                        config.Game.BETLINE[spin] = "Seven";
                        this.test[spin].image = this.reelSevens.image;
                        this.sevens++;
                        break;
                }
            }
        }
        public determineWinnings()
        {
            if (this.blanks == 0)
            {
                if (this.grapes == 3) {
                    this.winnings = config.Game.BET * 10;
                }
                else if(this.bananas == 3) {
                    this.winnings = config.Game.BET * 20;
                }
                else if (this.oranges == 3) {
                    this.winnings = config.Game.BET * 30;
                }
                else if (this.cherries == 3) {
                    this.winnings = config.Game.BET * 40;
                }
                else if (this.bars == 3) {
                    this.winnings = config.Game.BET * 50;
                }
                else if (this.bells == 3) {
                    this.winnings = config.Game.BET * 75;
                }
                else if (this.sevens == 3) {
                    this.winnings = config.Game.BET * 100;
                }
                else if (this.grapes == 2) {
                    this.winnings = config.Game.BET * 2;
                }
                else if (this.bananas == 2) {
                    this.winnings = config.Game.BET * 2;
                }
                else if (this.oranges == 2) {
                    this.winnings = config.Game.BET * 3;
                }
                else if (this.cherries == 2) {
                    this.winnings = config.Game.BET * 4;
                }
                else if (this.bars == 2) {
                    this.winnings = config.Game.BET * 5;
                }
                else if (this.bells == 2) {
                    this.winnings = config.Game.BET * 10;
                }
                else if (this.sevens == 2) {
                    this.winnings = config.Game.BET * 20;
                }
                else if (this.sevens == 1) {
                    this.winnings = config.Game.BET * 5;
                }
                else {
                    this.winnings = config.Game.BET * 1;
                }
                config.Game.WIN++;
                this.showWinMessage();
                }
            else
            {
                config.Game.LOST++;
                this.showLossMessage();
            }
                
        }
                /* Check to see if the player won the jackpot */
        public checkJackPot() {
            /* compare two random values */
            let jackPotTry = Math.floor(Math.random() * 51 + 1);
            let jackPotWin = Math.floor(Math.random() * 51 + 1);
            if (jackPotTry == jackPotWin) {
                this.result.setText("You Won the $" + config.Game.JACKPOT + " Jackpot!!");
                config.Game.PLAYER_MONEY += config.Game.JACKPOT;
                config.Game.JACKPOT = 1000;
            }
        }

        /* Utility function to show a win message and increase player money */
        public showWinMessage() {
            config.Game.PLAYER_MONEY += this.winnings;
            this.result.setText("You Won:" +this.winnings + " $");
            this.checkJackPot();
            this.resetFruitTally();
        }

        /* Utility function to show a loss message and reduce player money */
        public showLossMessage() {
            config.Game.PLAYER_MONEY -= config.Game.BET;
            this.result.setText("You Lost!");
            this.resetFruitTally();
        }

        public Spin() {
            if (config.Game.PLAYER_MONEY == 0)
            {
                    this.resetAll()
                    config.Game.SCENE_STATE = scenes.State.END;
            }
            else if (config.Game.BET > config.Game.PLAYER_MONEY ) {
                this.result.setText("You don't have enough money");
            }
            else if (config.Game.BET <= config.Game.PLAYER_MONEY ) {
                this.Reels()
                let fruits = config.Game.BETLINE[0] + " - " + config.Game.BETLINE[1] + " - " + config.Game.BETLINE[2];
                console.log(fruits);
                this.determineWinnings();
                config.Game.TURN++;
                this.showPlayerStats();
            }
        }        
        public showPlayerStats()
        {
            config.Game.WIN_RATE = config.Game.WIN / config.Game.TURN;
            this.moneyLabel.setText("Player Money: "+ config.Game.PLAYER_MONEY);
            this.jackpotLabel.setText("Jackpot: "+ config.Game.JACKPOT);
            this.turnLabel.setText("Turn: "+ config.Game.TURN);
            this.winLabel.setText("Wins: "+ config.Game.WIN);
            this.lossLabel.setText("Losses: "+ config.Game.LOST);
                this.winRatio.setText("Win Ratio: " + (config.Game.WIN_RATE * 100).toFixed(2) + "%");
            this.betAmount.setText("Bet: " +config.Game.BET);
        }
        public resetAll() {
            config.Game.PLAYER_MONEY = 1000;
            config.Game.WIN = 0;
            config.Game.JACKPOT = 5000;
            config.Game.TURN = 0;
            config.Game.BET = 0;
            config.Game.WIN = 0;
            config.Game.LOST = 0;
            config.Game.WIN_RATE = 0;
            this.showPlayerStats();
        }
        
        public Bet() {
            if(config.Game.BET < 50)
            {
                config.Game.BET +=10;
            }
            else if(config.Game.BET == 50)
            {
                config.Game.BET +=50;
            }
            else if (config.Game.BET < 500)
            {
                config.Game.BET += 100;
            }
            else if(config.Game.BET == 500)
            {
                config.Game.BET = 10;
            }

            if(config.Game.BET > config.Game.PLAYER_MONEY)
            {
            }
            this.betAmount.setText("Bet: " +config.Game.BET);
        }
        public Quit() {
            this.resetAll();
            config.Game.SCENE_STATE = scenes.State.START;
        }
        
    }
}