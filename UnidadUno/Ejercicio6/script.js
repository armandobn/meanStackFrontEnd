// 6 - Desarrollar un programa que con una estructura de repeticion
// imprima la sumatoria de todos los numeros entre 1 y 50
document.write('Desarrollar un programa que con una estructura de repeticion imprima la sumatoria de todos los numeros entre 1 y 50 <br>');

let suma=0;
for(let i=1; i<=50; i++){
  document.write(`+ ${i} <br>`);
  suma=suma+i;
}

document.write(`Suma Total: ${suma}`);



