// IIFE - Immediately invoked function expression
// means = anonymous self-executing function
let Game = (function(){

    let canvas:HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    let stage:createjs.Stage;
    let playerMoney = 1000;
    let winnings = 0;
    let jackpot = 5000;
    let turn = 0;
    let playerBet = 0;
    let winNumber = 0;
    let lossNumber = 0;
    let spinResult;
    let fruits = "";
    let winRatio = 0;
    let grapes = 0;
    let bananas = 0;
    let oranges = 0;
    let cherries = 0;
    let bars = 0;
    let bells = 0;
    let sevens = 0;
    let blanks = 0;
    let currentSceneState: scenes.State;
    let currentScene: objects.Scene;   
    let assets: createjs.LoadQueue;
    let assetManifest =
    [
        {id:"placeholder", src:"./Assets/images/lul.png"},
        {id:"playButton", src:"./Assets/images/playButton.png"},
        {id:"spinButton", src:"./Assets/images/spinButton.png"},
        {id:"betButton", src:"./Assets/images/betButton.png"},
        {id:"retryButton", src:"./Assets/images/retryButton.png"},
        {id:"quitButton", src:"./Assets/images/quitButton.png"},
        {id:"Seven", src:"./Assets/images/Seven.png"},
        {id:"Blank", src:"./Assets/images/Blank.png"},
        {id:"Grapes", src:"./Assets/images/Grapes.png"},
        {id:"Orange", src:"./Assets/images/Orange.png"},
        {id:"Banana", src:"./Assets/images/Banana.png"},
        {id:"Cherry", src:"./Assets/images/Cherry.png"},
        {id:"Bar", src:"./Assets/images/Bar.png"},
        {id:"Bell", src:"./Assets/images/Bell.png"},
        {id:"Seven", src:"./Assets/images/Seven.png"},
        {id:"reel", src:"./Assets/images/reel.png"},
        {id:"lul", src:"./Assets/images/lul.png"},

    ];
    function Preload():void
    {
        assets = new createjs.LoadQueue();
        config.Game.ASSETS = assets;
        assets.loadManifest(assetManifest);
        assets.on("complete",Start);
    }
    function Start():void
    {
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; //60 FPS
        createjs.Ticker.on("tick", Update);
        stage.enableMouseOver(20);

        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE_STATE = scenes.State.START;
    }
    function Update():void
    {
        if(currentSceneState != config.Game.SCENE_STATE)
        {
            Main();
        }

        currentScene.Update();

        stage.update();
    }
    
    function Main():void
    {// cleanup
        if(currentSceneState != scenes.State.NO_SCENE)
        {
            currentScene.removeAllChildren();
            stage.removeAllChildren();
        }

        // state machine
        switch(config.Game.SCENE_STATE)
        {
            case scenes.State.START:
                currentScene = new scenes.Start();
                break;
            case scenes.State.PLAY:
                currentScene = new scenes.Play();
                break;
            case scenes.State.END:
                currentScene = new scenes.End();
                break;

        }

        // add the scene to the stage and setup the current scene
        stage.addChild(currentScene);
        currentSceneState = config.Game.SCENE_STATE;

    }
    window.addEventListener('load', Preload);

})();
