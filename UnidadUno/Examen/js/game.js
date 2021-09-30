const WIDTH = 400; //El ancho del mapa(imagen)
const HEIGH = 400; //El alto del mapa(imagen)   


/*El target es un objeto que guardara la ubicacion de donde se encuentra el tesoro
  de manera aleatoria deacuerdo al limite de la imagen tanto del ancho y lo alto
*/
let target = {
  x: getRandomNumber(WIDTH), /* utiliza el metodo getRandomNumber que recibe como parametro un numero 
                            la cual nos devolvera un numero aleatorio del 0 hasta el numero indicado*/
  y: getRandomNumber(HEIGH)
}

// console.log(target);
//Selecciona el elemento del html por medio de su ID(contendra el mapa)
let $map = document.getElementById('map'); 
/*Selecciona el elemento del html por medio de su ID(contendra un cuadro de mensajes
  si esta serca o no del tesoro)*/
let $distance = document.getElementById('distance'); 
let clicks = 0; //Un contador de los click iniciazado en 0

/*Una vez que seleccionamos el elemento le indicamos que utilizaremos el metodo de click o evento*/ 
$map.addEventListener('click', (e)=>{ //le indicamos por parametro que utilizaremos el evento click y estarasiendo escuchado por el segundo parametro
  clicks++; //Incrementa de 1 en 1 esta variable por cada click que se haga dentro de la imagen
  /*variable distance - recibe una funcion getDistance donde obtiene la distancia que estamos del tesoro
    recibiendo como parametro donde estamos y el donde esta el tesoro */
  let distance = getDistance(e, target); 
  /*distanceHint - recibe una funcion getDistanceHint que recibe como parametro una distancia donde recibira un
    mensaje de donde se encuentra */
  let distanceHint = getDistanceHint(distance);
  /*utilizamos distance que utiliza el metodo innerHTML para poder escribir un mensaje a la vista del 
  usuario o el html por medio de unos varchick y se le pasara una estructura html en este caso un
  h1 y que contentra una variable que sera el mensaje a tramitir para el usuario*/
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;
  // console.log(distance);

  /*Una condicion que indica la distancia que esta el tesoro y lo cual lo consideramos
    que ya encontro el tesoro*/
  if(distance < 20){
    //lanza una alerta que se encontro el tesoro
    alert(`FOUND the Treasure in ${clicks} clicks!`);
  }

});

