var Jugador = /** @class */ (function () {
    function Jugador(nombre, ulti) {
        this.vida = 100;
        this.habilidad = 100;
        this.nombre = "";
        this.ulti = "";
        this.nombre = nombre;
        this.ulti = ulti;
    }
    Jugador.prototype.curar = function (jugadorObjetivo) {
        if (this.habilidad < 20) {
            console.log("No tienes  mana");
        }
        else {
            jugadorObjetivo.vida += 20;
            this.habilidad -= 40;
        }
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.revivir = function (jugadorObjetivo) {
        jugadorObjetivo.vida = 100;
        jugadorObjetivo.habilidad = 100;
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.mana = function () {
        this.habilidad += 40;
        console.log("mana: " + this.habilidad);
    };
    Jugador.prototype.belzebu = function (jugadorObjetivo) {
        jugadorObjetivo.vida -= 30;
        jugadorObjetivo.habilidad -= 20;
        this.vida += 20;
        this.habilidad -= 30;
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.castigoDivino = function (jugadorObjetivo) {
        jugadorObjetivo.vida -= 60;
        this.habilidad -= 60;
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.atacar = function (jugadorObjetivo) {
        if (this.habilidad < 40) {
            console.log("No tienes  mana");
        }
        else {
            jugadorObjetivo.vida -= 20;
            this.habilidad -= 40;
        }
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.status = function (jugadorObjetivo) {
        if (jugadorObjetivo.vida <= 0) {
            jugadorObjetivo.vida = 0;
            console.log("Perdio " + jugadorObjetivo.nombre);
        }
        if (this.vida <= 0) {
            this.vida = 0;
            console.log("Perdio " + this.nombre);
        }
        console.log(jugadorObjetivo);
        console.log(this);
    };
    Jugador.prototype.definitiva = function (jugadorObjetivo) {
        if (this.habilidad <= 0) {
            console.log("No tienes mana");
        }
        else {
            if (this.ulti == "belzebu") {
                if (this.habilidad < 30) {
                    console.log("No tines mana");
                }
                else {
                    this.belzebu(jugadorObjetivo);
                }
            }
            else if (this.ulti == "castigoDivino") {
                if (this.habilidad < 60) {
                    console.log("No tines mana");
                }
                else {
                    this.castigoDivino(jugadorObjetivo);
                }
            }
        }
    };
    return Jugador;
}());
var demonio = new Jugador("susuki", "belzebu");
var angel = new Jugador("nao", "castigoDivino");
console.log(demonio);
console.log(angel);
