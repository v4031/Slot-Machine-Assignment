module scenes
{
    export class Start extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        titleLabel:objects.Label;
        playButton:objects.Button;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.titleLabel = new objects.Label();
            this.playButton = new objects.Button();

            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this.titleLabel = new objects.Label( 320, 200, true,"The Slot Machine", "50px","Consolas", "#000000");
            this.playButton = new objects.Button(config.Game.ASSETS.getResult("playButton"), 320, 400, true);
            this.Main();
        }        
        
        public Update(): void 
        {
            
        }
        
        public Main(): void {
            
            this.addChild(this.titleLabel);
    
            this.addChild(this.playButton);
    
            this.playButton.on("click", function() {
               config.Game.SCENE_STATE = scenes.State.PLAY;
            });
        }

        
    }
}