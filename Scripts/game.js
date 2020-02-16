"use strict";
// IIFE - Immediately invoked function expression
// means = anonymous self-executing function
var Game = (function () {
    var canvas = document.getElementsByTagName("canvas")[0];
    var stage;
    var playerMoney = 1000;
    var winnings = 0;
    var jackpot = 5000;
    var turn = 0;
    var playerBet = 0;
    var winNumber = 0;
    var lossNumber = 0;
    var spinResult;
    var fruits = "";
    var winRatio = 0;
    var grapes = 0;
    var bananas = 0;
    var oranges = 0;
    var cherries = 0;
    var bars = 0;
    var bells = 0;
    var sevens = 0;
    var blanks = 0;
    var currentSceneState;
    var currentScene;
    var assets;
    var assetManifest = [
        { id: "placeholder", src: "./Assets/images/lul.png" },
        { id: "playButton", src: "./Assets/images/playButton.png" },
        { id: "spinButton", src: "./Assets/images/spinButton.png" },
        { id: "betButton", src: "./Assets/images/betButton.png" },
        { id: "retryButton", src: "./Assets/images/retryButton.png" },
        { id: "quitButton", src: "./Assets/images/quitButton.png" },
        { id: "Seven", src: "./Assets/images/Seven.png" },
        { id: "Blank", src: "./Assets/images/Blank.png" },
        { id: "Grapes", src: "./Assets/images/Grapes.png" },
        { id: "Orange", src: "./Assets/images/Orange.png" },
        { id: "Banana", src: "./Assets/images/Banana.png" },
        { id: "Cherry", src: "./Assets/images/Cherry.png" },
        { id: "Bar", src: "./Assets/images/Bar.png" },
        { id: "Bell", src: "./Assets/images/Bell.png" },
        { id: "Seven", src: "./Assets/images/Seven.png" },
        { id: "reel", src: "./Assets/images/reel.png" },
        { id: "lul", src: "./Assets/images/lul.png" },
    ];
    function Preload() {
        assets = new createjs.LoadQueue();
        config.Game.ASSETS = assets;
        assets.loadManifest(assetManifest);
        assets.on("complete", Start);
    }
    function Start() {
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; //60 FPS
        createjs.Ticker.on("tick", Update);
        stage.enableMouseOver(20);
        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE_STATE = scenes.State.START;
    }
    function Update() {
        if (currentSceneState != config.Game.SCENE_STATE) {
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        if (currentSceneState != scenes.State.NO_SCENE) {
            currentScene.removeAllChildren();
            stage.removeAllChildren();
        }
        // state machine
        switch (config.Game.SCENE_STATE) {
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
//# sourceMappingURL=game.js.map