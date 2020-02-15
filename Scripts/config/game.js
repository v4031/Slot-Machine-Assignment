"use strict";
var config;
(function (config) {
    var Game = /** @class */ (function () {
        function Game() {
        }
        Game.PLAYER_MONEY = 1000;
        Game.TURN = 0;
        Game.JACKPOT = 5000;
        Game.WIN = 0;
        Game.LOST = 0;
        Game.WIN_RATE = 0;
        Game.BETLINE = [" ", " ", " "];
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=game.js.map