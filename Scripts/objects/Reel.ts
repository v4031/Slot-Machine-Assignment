module objects
{
    export class Reel extends GameObject
    {
        
        // constructor
        constructor(image:Object = config.Game.ASSETS.getResult("lul")
            , x:number = 0, y:number= 0, isCentered:boolean = false)
        {
            super(image, x, y, isCentered);


            this.Start();
        }
        
        protected _checkBounds(): void {
            
        }

        public Start(): void {
            
        }

        public Update(): void {
            
        }

        public Reset(): void {
            
        }
    }
}