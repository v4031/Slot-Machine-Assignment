module config
{  
    export class Game
    {
        public static ASSETS: createjs.LoadQueue;
        public static STAGE: createjs.Stage;
        public static SCENE_STATE:scenes.State;
        public static REEL: createjs.Bitmap[]= [];
    }
}