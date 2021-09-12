// 8 - Escribir un programa que permita al usuario ingresar 6 números enteros, que pueden ser 
//positivos o negativos. Al finalizar, mostrar la sumatoria de los números negativos y el 
//promedio de los positivos.

let sumatoria={};
for(let i=0; i<6; i++){
  sumatoria[i]=prompt(`Ingresa un numero: ${i+1}`);
};

let suma=0;
for(let i=0; i<6; i++){
  document.write(`${sumatoria[i]}<br>` );
  suma=suma+parseInt(sumatoria[i]);
};


document.write(`suma total: ${suma}`);


