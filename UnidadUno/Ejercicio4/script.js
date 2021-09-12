

// 4 - Pedir al usuario que ingrese una cantidad, la cantidad ingresada por el usuario sera el numero de 
// iteraciones que hara el programa, en cada iteracion pedirle al usuario que ingrese un numero, 
// al final imprimir la suma de cada numero ingresado por el usuario.

let a=prompt("Ingresa cuantos numeros gustas ingresar");
let suma=0;

if(parseInt(a)){
  for(let i=0; i<a; i++){
    let b=prompt(`Ingresa numero ${i+1}`);
    suma=suma+parseInt(b);
  }
  document.write(`Suma Total: ${suma}`);
}else{
  alert("Solo numeros");
}


