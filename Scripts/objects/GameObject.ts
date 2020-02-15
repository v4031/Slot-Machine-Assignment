module objects
{
    export abstract class GameObject extends createjs.Bitmap
    {
        // PRIVATE INSTANCE MEMBERS
        private _width:number;
        private _height:number;
        private _halfWidth:number;
        private _halfHeight:number;
        private _isColliding:boolean;
        private _isPickedUp:boolean;
        private _isCentered:boolean;
        
        // PUBLIC PROPERTIES
        get width():number
        {
            return this._width;
        }

        set width(newWidth:number)
        {
            this._width = newWidth;
            this._halfWidth = this._computeHalfWidth();
        }

        get height():number
        {
            return this._height;
        }

        set height(newHeight:number)
        {
            this._height = newHeight;
            this._halfHeight = this._computeHalfHeight();
        }

        get halfWidth():number
        {
            return this._halfWidth;
        }

        get halfHeight():number
        {
            return this._halfHeight;
        }

        get isColliding():boolean
        {
            return this._isColliding;
        }

        set isColliding(newState:boolean)
        {
            this._isColliding = newState;
        }

        get isPickedUp():boolean
        {
            return this._isPickedUp;
        }

        set isPickedUp(newState:boolean)
        {
            this._isPickedUp = newState;
        }
        get isCentered():boolean
        {
            return this._isCentered;
        }

        set isCentered(newState:boolean)
        {
            this._isCentered = newState;
        }


        // CONSTRUCTOR
        constructor(imageString:string = "./Assets/images/placeholder.png", 
        x:number = 0, y:number = 0, centered:boolean = false)
        {
            super(imageString);

            // initialization
            this._width = 0;
            this._height = 0;
            this._halfWidth = 0;
            this._halfHeight = 0;
            this._isColliding = false;
            this._isPickedUp = false;
            this._isCentered = centered;


            this.image.addEventListener("load", () => {

                this.width = this.getBounds().width;
                this.height = this.getBounds().height;

                if(centered)
                {
                    this.regX = this.halfWidth;
                    this.regY = this.halfHeight;
                }
            });

        }

        // PRIVATE METHODS
        private _computeHalfWidth():number
        {
            return this.width * 0.5;
        }

        private _computeHalfHeight():number
        {
            return this.height * 0.5;
        }

        protected abstract _checkBounds():void;


        // PUBLIC METHODS

        public abstract Start():void;

        public abstract Update():void;
        
        public abstract Reset():void;

    }

}