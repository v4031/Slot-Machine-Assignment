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
            this._endLabel = new objects.Label(320, 225, "#ff0000", true, "You've run out of money!", "40px", "Consolas");
            this._retryButton = new objects.Button(config.Game.ASSETS.getResult("retryButton"), 220, 400, true);
            this._quitButton = new objects.Button(config.Game.ASSETS.getResult("quitButton"), 420, 400, true);
            this.Main();
        };
        End.prototype.Update = function () {
        };
        End.prototype.Main = function () {
            this.addChild(this._endLabel);
            this.addChild(this._retryButton);
            this.addChild(this._quitButton);
            this._retryButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.PLAY;
            });
            this._quitButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.START;
            });
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=End.js.map