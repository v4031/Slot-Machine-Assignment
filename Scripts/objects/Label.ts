module objects
{
    export class Label extends createjs.Text
    {
        _isCentered:boolean;
        // constructor
        constructor(x: number = 0, y: number = 0, public isCentered:boolean = false,
            public labelString:string = "default", 
            public fontSize: string = "12px", 
            public fontFamily: string = "Consolas",
            public fontColour: string = "#000000"
            )
            {
                super(labelString, fontSize + " " + fontFamily, fontColour);
                this._isCentered = isCentered;
                if(this._isCentered)
                {
                    this.regX = this.getBounds().width * 0.5;
                    this.regY = this.getMeasuredLineHeight() * 0.5;
                }   

                this.x = x;
                this.y = y;
            }

        // methods

        public setText(newText:string)
        {
            this.text = newText;
            if(this._isCentered)
            {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getMeasuredLineHeight() * 0.5;
            }   
        }
    }
}