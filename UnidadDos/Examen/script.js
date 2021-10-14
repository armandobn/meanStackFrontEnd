var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.ejercicioUno = function () {
        document.write("¡Hola Mundo!");
    };
    App.prototype.ejercicioDos = function () {
        var frace = "¡Hola Mundo!";
        document.write(frace);
    };
    App.prototype.ejercicioTres = function () {
        var nombre = prompt("Ingresa tu nombre");
        document.write("\u00A1Hola " + nombre + "!");
    };
    App.prototype.ejercicioCuatro = function () {
        var nombre = prompt("Ingresa tu nombre");
        var numero = prompt("Ingresa un numero entero");
        for (var i = 0; i < numero; i++) {
            document.write("\u00A1Hola " + nombre + "! <br>");
        }
    };
    App.prototype.ejercicioCinco = function () {
        var nombre = prompt("Ingresa tu nombre completo");
        var texto = nombre.split(' ');
        var palabras = texto.length;
        var nombrePriMayus = "";
        document.write(nombre.toLowerCase() + "<br>");
        document.write(nombre.toUpperCase() + "<br>");
        for (var i = 0; i < palabras; i++) {
            // console.log(`${texto[i].substring(0,1).toUpperCase()}${texto[i].substring(1,texto[i].length)}`);
            nombrePriMayus = "" + nombrePriMayus + texto[i].substring(0, 1).toUpperCase() + texto[i].substring(1, texto[i].length);
        }
        // console.log(nombrePriMayus);
        document.write(nombrePriMayus);
    };
    App.prototype.ejercicioSeis = function () {
        var edad = prompt("Cual es tu edad");
        if (edad < 18) {
            document.write("Eres menor de Edad");
        }
        else {
            document.write("Eres Mayor de Edad");
        }
    };
    App.prototype.ejercicioSiete = function () {
        var palabra = prompt("Cual es la contraseña");
        var pass = "Armi$";
        if (palabra.toLowerCase() == pass.toLowerCase()) {
            alert("correcto");
        }
        else {
            alert("incorrecto");
        }
    };
    App.prototype.ejercicioOcho = function () {
        var palabra = prompt("Ingrese una palabra");
        for (var i = 0; i < 10; i++) {
            document.write(palabra + "<br>");
        }
    };
    App.prototype.ejercicioNueve = function () {
        var edad = prompt("Cual es tu edad");
        var hoy = new Date();
        var ano = hoy.getFullYear();
        for (var i = 0; i < edad; i++) {
            document.write(hoy.getFullYear() - i + "<br>");
        }
    };
    App.prototype.ejercicioDies = function () {
        var invertir = prompt("Cantidad a invertir");
        var anual = prompt("Interes Anual");
        var ano = prompt("Numero de años");
        var capital = 0;
        for (var i = 0; i < ano; i++) {
            capital = capital + invertir * anual;
            document.write("a\u00F1o " + (i + 1) + ", capital: " + capital + " <br>");
        }
    };
    App.prototype.ejecutar = function () {
        var opcion = prompt("Selecciona el ejercicio que quieres ver: \n                                  1.- Ejercicio 01\n                                  2.- Ejercicio 02\n                                  3.- Ejercicio 03\n                                  4.- Ejercicio 04\n                                  5.- Ejercicio 05\n                                  6.- Ejercicio 06\n                                  7.- Ejercicio 07\n                                  8.- Ejercicio 08\n                                  9.- Ejercicio 09\n                                  10.- Ejercicio 10\n                                  ");
        opcion = parseInt(opcion);
        switch (opcion) {
            case 1:
                this.ejercicioUno();
                break;
            case 2:
                this.ejercicioDos();
                break;
            case 3:
                this.ejercicioTres();
                break;
            case 4:
                this.ejercicioCuatro();
                break;
            case 5:
                this.ejercicioCinco();
                break;
            case 6:
                this.ejercicioSeis();
                break;
            case 7:
                this.ejercicioSiete();
                break;
            case 8:
                this.ejercicioOcho();
                break;
            case 9:
                this.ejercicioNueve();
                break;
            case 10:
                this.ejercicioDies();
                break;
        }
    };
    return App;
}());
var Examen = new App();
Examen.ejecutar();
