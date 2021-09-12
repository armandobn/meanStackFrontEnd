
// 5 - Pedir al usuario que ingrese una palabra o frase y luego imprimir un listado 
// de la cantidad de vocales que aparecen en esa palabra o frase.

let cadena=prompt('Ingresa una frase o palabra');

let vocalesArray = ['A','a','E','e','I','i','O','o', 'U', 'u'];
let texto=cadena.split('');
let cantVocal=vocales(texto);

document.write(`Frace: ${cadena} <br>`);
document.write(`En la frace se encuentran, Vocales: ${cantVocal}`);

function vocales(frase){
  let z=' ';
  let cont=0;
    for (let i=0; i<frase.length; i++){
        z = frase[i];
        for (let j=0; j<vocalesArray.length; j++){
            if(z==vocalesArray[j]){
              cont++;
            }
        }
    }
  return cont;
}