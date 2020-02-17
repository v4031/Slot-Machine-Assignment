"use strict";
// IIFE - Immediately invoked function expression
// means = anonymous self-executing function
var Game = (function () {
    var canvas = document.getElementsByTagName("canvas")[0];
    var stage;
    var currentSceneState;
    var currentScene;
    var assets;
    var assetManifest = [
        { id: "noice", src: "./Assets/sounds/noice.mp3" },
        { id: "bet", src: "./Assets/sounds/bet.mp3" },
        { id: "win", src: "./Assets/sounds/win.mp3" },
        { id: "lose", src: "./Assets/sounds/lose.mp3" },
        { id: "broke", src: "./Assets/sounds/broke.mp3" },
        { id: "playButton", src: "./Assets/images/playButton.png" },
        { id: "spinButton", src: "./Assets/images/spinButton.png" },
        { id: "betButton", src: "./Assets/images/betButton.png" },
        { id: "retryButton", src: "./Assets/images/retryButton.png" },
        { id: "quitButton", src: "./Assets/images/quitButton.png" },
        { id: "Seven", src: "./Assets/images/Seven.png" },
        { id: "Blank", src: "./Assets/images/Blank.png" },
        { id: "Grapes", src: "./Assets/images/Grapes.png" },
        { id: "Banana", src: "./Assets/images/Banana.png" },
        { id: "Orange", src: "./Assets/images/Orange.png" },
        { id: "Cherry", src: "./Assets/images/Cherry.png" },
        { id: "Bar", src: "./Assets/images/Bar.png" },
        { id: "Bell", src: "./Assets/images/Bell.png" },
        { id: "Seven", src: "./Assets/images/Seven.png" },
        { id: "top", src: "./Assets/images/top1.png" },
        { id: "reel", src: "./Assets/images/reel.png" },
        { id: "lul", src: "./Assets/images/lul.png" },
    ];
    function Preload() {
        assets = new createjs.LoadQueue();
        config.Game.ASSETS = assets;
        assets.installPlugin(createjs.Sound); // enable sound preloading
        assets.loadManifest(assetManifest);
        assets.on("complete", Start);
    }
    function Start() {
        config.Game.REEL[0] = new createjs.Bitmap(config.Game.ASSETS.getResult("Blank"));
        config.Game.REEL[1] = new createjs.Bitmap(config.Game.ASSETS.getResult("Grapes"));
        config.Game.REEL[2] = new createjs.Bitmap(config.Game.ASSETS.getResult("Banana"));
        config.Game.REEL[3] = new createjs.Bitmap(config.Game.ASSETS.getResult("Orange"));
        config.Game.REEL[4] = new createjs.Bitmap(config.Game.ASSETS.getResult("Cherry"));
        config.Game.REEL[5] = new createjs.Bitmap(config.Game.ASSETS.getResult("Bar"));
        config.Game.REEL[6] = new createjs.Bitmap(config.Game.ASSETS.getResult("Bell"));
        config.Game.REEL[7] = new createjs.Bitmap(config.Game.ASSETS.getResult("Seven"));
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