// 7 - Dado un numero entero positivo obtener el factorial del mismo.

let numero=prompt('Ingresa el factorial a calcular');
let factorial=1;
for(let i=1; i<=numero; i++){
  factorial=factorial*i;
}

document.write(`Factorial de ${numero}: ${factorial}`);