module config
{  
    export class Game
    {
        public static ASSETS: createjs.LoadQueue;
        public static STAGE: createjs.Stage;
        public static SCENE_STATE: scenes.State;
        public static PLAYER_MONEY: number=1000;
        public static TURN: number = 0;
        public static JACKPOT: number = 5000;
        public static WIN: number = 0;
        public static LOST: number = 0;
        public static WIN_RATE: number= 0;
        public static BET: number= 10;
        public static BETLINE: string[] = [" ", " ", " "];
    }
}