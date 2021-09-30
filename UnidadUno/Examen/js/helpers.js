/*Se crea un objeto que contiene una funcion donde recibe como parametro un dato
la cual sera el numero como tamaño maximo para que genere un numero aleatorio*/
let getRandomNumber = size =>{
  /*Utilizamos el objeto Math que recibira el metodo floor para que nos de numeros enteros y 
    recibira un random que genera el numero aleatorio multiplado por el numero maximo que 
    queremos que tenga como maximo el numero mas grande posible*/
  return Math.floor(Math.random() * size); 
}

/*Se crea un objeto donde recibirar dos parametros que es la distancia en donde nos encontramos y 
  en donde se encuentra el tesoro y nos la devuelve la distancia entre ellos*/
let getDistance = (e , target) =>{
  let diffX = e.offsetX - target.x; 
  let diffY = e.offsetY - target.y;
  //el sqrt devuelve la raiz cuadra la cual nos dara como resultado la distancia de uno sobre el otro
  return Math.sqrt((diffX * diffX) + (diffY * diffY)); 
}

/* se crea un objeto que contiene una funcion donde recibe como parametro la distancia,
  contiene la funcion una serie de condiciones que indica al usuario a por medio de palabras
  que tan serca o lejos se encuentra del tesoro y nos retorna el mensaje que cumpla con la condiccion */
let getDistanceHint = distance => {
  if(distance < 30){
    return "Boiling Hot";
  }else if(distance < 40){
    return "Really Hot";
  }else if(distance < 60){
    return "Hot";
  }else if(distance < 100){
    return "Warm";
  }else if(distance < 180){
    return "Cold";
  }else if(distance < 360){
    return "Really Cold";
  }else{
    return "Freezing";
  }

}