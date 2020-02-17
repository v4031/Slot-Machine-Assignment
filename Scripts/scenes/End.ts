module scenes
{
    export class End extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        _endLabel:objects.Label;
        _retryButton:objects.Button;
        _quitButton:objects.Button;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();
            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this._endLabel = new objects.Label(320, 225, "#ff0000", true, "You've run out of money!", "40px","Consolas");
            this._retryButton = new objects.Button(config.Game.ASSETS.getResult("retryButton"), 220, 400, true);
            this._quitButton = new objects.Button(config.Game.ASSETS.getResult("quitButton"), 420, 400, true);
           
            this.Main();
        }        
        
        public Update(): void 
        {
            
        }
        
        public Main(): void {
            
            this.addChild(this._endLabel);
    
            this.addChild(this._retryButton);
            this.addChild(this._quitButton);
    
            this._retryButton.on("click", function() {
                config.Game.SCENE_STATE = scenes.State.PLAY;
             });
             this._quitButton.on("click", function() {
                config.Game.SCENE_STATE = scenes.State.START;
             });
        }

        
    }
}