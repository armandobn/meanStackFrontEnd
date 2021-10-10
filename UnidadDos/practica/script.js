var Personaje = /** @class */ (function () {
    function Personaje() {
    }
    Personaje.prototype.atacar = function () {
        return 1;
    };
    Personaje.prototype.defender = function () {
        return 'roldan';
    };
    Personaje.prototype.matar = function () {
        return true;
    };
    Personaje.prototype.revivir = function () {
        return [1, 2, 3];
    };
    Personaje.prototype.curar = function () {
    };
    return Personaje;
}());
var pj = new Personaje();
console.log(pj.defender());
