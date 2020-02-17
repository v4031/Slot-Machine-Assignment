module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _playerMoney: number=1000;
        private _turn: number = 0;
        private _jackpot: number = 5000;
        private _win: number = 0;
        private _lost: number = 0;
        private _winRate: number= 0;
        private _bet: number= 25;
        private _betLine: string[] = [" ", " ", " "];
        //Button
        private _spinButton:objects.Button;
        private _betButton:objects.Button;
        private _quitButton:objects.Button;
        //Label
        private _moneyLabel:objects.Label;
        private _jackpotLabel:objects.Label;
        private _turnLabel:objects.Label;
        private _winLabel:objects.Label;
        private _lossLabel:objects.Label;
        private _winRatio:objects.Label;
        private _result:objects.Label;
        private _betAmount:objects.Label;
        //Reel
        private _reelFrame:objects.Reel;
        private _reel:objects.Reel[] = [];
        private _grapes = 0;
        private _bananas = 0;
        private _oranges = 0;
        private _cherries = 0;
        private _bars = 0;
        private _bells = 0;
        private _sevens = 0;
        private _blanks = 0;
        private _winnings = 0;
        
        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this._reel[0] = new objects.Reel(config.Game.ASSETS.getResult("lul"),40, 165, false);
            this._reel[1] = new objects.Reel(config.Game.ASSETS.getResult("lul"),250, 165, false);
            this._reel[2] = new objects.Reel(config.Game.ASSETS.getResult("lul"),460, 165, false);
            this._moneyLabel = new objects.Label(30,25,"Yellow");
            this._jackpotLabel = new objects.Label(230,55,"Yellow");
            this._turnLabel = new objects.Label(30,55,"Yellow");
            this._winLabel = new objects.Label(30,85,"Yellow");
            this._lossLabel = new objects.Label(230,85,"Yellow");
            this._winRatio = new objects.Label(30,115,"Yellow");
            this._betAmount = new objects.Label(230,115,"Yellow");
            this._result = new objects.Label(530, 80,"Yellow", true, " ","19px");
            this._reelFrame = new objects.Reel(config.Game.ASSETS.getResult("reel"), 0, 155, false);
            this._spinButton = new objects.Button(config.Game.ASSETS.getResult("spinButton"), 320, 400, true);
            this._betButton = new objects.Button(config.Game.ASSETS.getResult("betButton"), 120, 400, true);
            this._quitButton = new objects.Button(config.Game.ASSETS.getResult("quitButton"), 520, 400, true);
            this._moneyLabel.setText("Player Money: "+ this._playerMoney);
            this._jackpotLabel.setText("Jackpot: "+ this._jackpot);
            this._turnLabel.setText("Turn: "+ this._turn);
            this._winLabel.setText("Wins: "+ this._win);
            this._lossLabel.setText("Losses: "+ this._lost);
            this._winRatio.setText("Win Ratio: 0.00%");
            this._betAmount.setText("Bet: " + this._bet);
            this.Main();
        }        
        
        public Update(): void 
        {
        }
        
        public resetFruitTally() {
            this._grapes = 0;
            this._bananas = 0;
            this._oranges = 0;
            this._cherries = 0;
            this._bars = 0;
            this._bells = 0;
            this._sevens = 0;
            this._blanks = 0;
        }
        public Main(): void {
            
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
        }
        
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
                    case this.checkRange(outCome[spin], 1, 27):  // blank 41.5% probability
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
        }
        public determineWinnings()
        {
            if (this._blanks == 0)
            {
                if (this._grapes == 3) {
                    this._winnings = this._bet * 10;
                }
                else if(this._bananas == 3) {
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
                let winSound = createjs.Sound.play("win");
                winSound.volume = 0.3;
                this.showWinMessage();
                }
            else
            {
                this._lost++;
                let lostSound = createjs.Sound.play("lose");
                lostSound.volume = 0.3;
                this.showLossMessage();
            }
                
        }
        /* Check to see if the player won the jackpot */
        public checkJackPot() {
            /* compare two random values */
            let jackPotTry = Math.floor(Math.random() * 51 + 1);
            let jackPotWin = Math.floor(Math.random() * 51 + 1);
            if (jackPotTry == jackPotWin) {
                this._result.setText("Jackpot!! $" + this._jackpot + " ");
                this._playerMoney += this._jackpot;
                this._jackpot = 1000;
                let jackpotSound = createjs.Sound.play("noice");
                jackpotSound.volume = 0.75;
            }
        }

        /* Utility function to show a win message and increase player money */
        public showWinMessage() {
            this._playerMoney += this._winnings;
            this._result.setText("You Won: $" + this._winnings);
            this.checkJackPot();
            this.resetFruitTally();
        }

        /* Utility function to show a loss message and reduce player money */
        public showLossMessage() {
            this._playerMoney -= this._bet;
            this._result.setText("You Lost!");
            this.resetFruitTally();
        }

        public Spin() {
            if (this._playerMoney == 0)
            {
                    this.resetAll()
                    let brokeSound = createjs.Sound.play("broke");
                    brokeSound.volume = 0.5;
                    config.Game.SCENE_STATE = scenes.State.END;
            }
            else if (this._bet > this._playerMoney ) {
                this._result.setText("Not enough money");
            }
            else if (this._bet <= this._playerMoney ) {
                this.Reels()
                this.determineWinnings();
                this._turn++;
                this.playerStats();
            }
        }        
        public playerStats()
        {
            this._winRate = this._win / this._turn;
            this._moneyLabel.setText("Player Money: "+ this._playerMoney);
            this._jackpotLabel.setText("Jackpot: "+ this._jackpot);
            this._turnLabel.setText("Turn: "+ this._turn);
            this._winLabel.setText("Wins: "+ this._win);
            this._lossLabel.setText("Losses: "+ this._lost);
            this._winRatio.setText("Win Ratio: " + (this._winRate * 100).toFixed(2) + "%");
            this._betAmount.setText("Bet: " +this._bet);
        }
        public resetAll() {
            this._playerMoney = 1000;
            this._win = 0;
            this._jackpot = 5000;
            this._turn = 0;
            this._bet = 25;
            this._win = 0;
            this._lost = 0;
            this._winRate = 0;
            this.playerStats();
        }
        
        public Bet() {
            let betSound = createjs.Sound.play("bet");
            betSound.volume = 0.5;
            if(this._bet < 100)
            {
                this._bet +=25;
            }
            else if (this._bet < 500)
            {
                this._bet += 100;
            }
            else if(this._bet == 500)
            {
                this._bet = 25;
            }

            if(this._bet > this._playerMoney)
            {
            }
            this._betAmount.setText("Bet: " +this._bet);
        }
        public Quit() {
            this.resetAll();
            config.Game.SCENE_STATE = scenes.State.START;
        }
        
    }
}