module objects
{
    export abstract class Scene extends createjs.Container
    {
        constructor()
        {
            super();
        }

        public abstract Start():void;

        public abstract Update():void;
        
        public abstract Main():void;
    }
}