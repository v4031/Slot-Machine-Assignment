"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function End() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        End.prototype.Start = function () {
            this.endLabel = new objects.Label(320, 200, true, "You ran out of Money!", "50px", "Consolas", "#000000");
            this.retryButton = new objects.Button(config.Game.ASSETS.getResult("retryButton"), 220, 400, true);
            this.quitButton = new objects.Button(config.Game.ASSETS.getResult("quitButton"), 420, 400, true);
            this.Main();
        };
        End.prototype.Update = function () {
        };
        End.prototype.Main = function () {
            this.addChild(this.endLabel);
            this.addChild(this.retryButton);
            this.addChild(this.quitButton);
            this.retryButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.PLAY;
            });
            this.quitButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.START;
            });
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=End.js.map