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
    var Label = /** @class */ (function (_super) {
        __extends(Label, _super);
        // constructor
        function Label(x, y, isCentered, labelString, fontSize, fontFamily, fontColour) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            if (labelString === void 0) { labelString = "default"; }
            if (fontSize === void 0) { fontSize = "12px"; }
            if (fontFamily === void 0) { fontFamily = "Consolas"; }
            if (fontColour === void 0) { fontColour = "#000000"; }
            var _this = _super.call(this, labelString, fontSize + " " + fontFamily, fontColour) || this;
            _this.isCentered = isCentered;
            _this.labelString = labelString;
            _this.fontSize = fontSize;
            _this.fontFamily = fontFamily;
            _this.fontColour = fontColour;
            _this._isCentered = isCentered;
            if (_this._isCentered) {
                _this.regX = _this.getBounds().width * 0.5;
                _this.regY = _this.getMeasuredLineHeight() * 0.5;
            }
            _this.x = x;
            _this.y = y;
            return _this;
        }
        // methods
        Label.prototype.setText = function (newText) {
            this.text = newText;
            if (this._isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getMeasuredLineHeight() * 0.5;
            }
        };
        return Label;
    }(createjs.Text));
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=Label.js.map