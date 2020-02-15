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
    window.addEventListener('load', Start);

    function showPlayerStats()
    {
        winRatio = winNumber / turn;
    }
})();
