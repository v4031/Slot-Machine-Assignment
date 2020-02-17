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
var objects;
(function (objects) {
    var Reel = /** @class */ (function (_super) {
        __extends(Reel, _super);
        // constructor
        function Reel(image, x, y, isCentered) {
            if (image === void 0) { image = config.Game.ASSETS.getResult("lul"); }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, image, x, y, isCentered) || this;
            _this.Start();
            return _this;
        }
        Reel.prototype._checkBounds = function () {
        };
        Reel.prototype.Start = function () {
        };
        Reel.prototype.Update = function () {
        };
        Reel.prototype.Reset = function () {
        };
        Reel.prototype.ChangeImage = function (num) {
            this.image = config.Game.REEL[num].image;
        };
        return Reel;
    }(objects.GameObject));
    objects.Reel = Reel;
})(objects || (objects = {}));
//# sourceMappingURL=Reel.js.map