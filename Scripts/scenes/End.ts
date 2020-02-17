module scenes
{
    export class End extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        endLabel:objects.Label;
        retryButton:objects.Button;
        quitButton:objects.Button;

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
            this.endLabel = new objects.Label(320, 225, "#ff0000", true, "You've run out of money!", "40px","Consolas");
            this.retryButton = new objects.Button(config.Game.ASSETS.getResult("retryButton"), 220, 400, true);
            this.quitButton = new objects.Button(config.Game.ASSETS.getResult("quitButton"), 420, 400, true);
           
            this.Main();
        }        
        
        public Update(): void 
        {
            
        }
        
        public Main(): void {
            
            this.addChild(this.endLabel);
    
            this.addChild(this.retryButton);
            this.addChild(this.quitButton);
    
            this.retryButton.on("click", function() {
                config.Game.SCENE_STATE = scenes.State.PLAY;
             });
             this.quitButton.on("click", function() {
                config.Game.SCENE_STATE = scenes.State.START;
             });
        }

        
    }
}