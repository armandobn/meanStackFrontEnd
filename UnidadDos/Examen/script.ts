class App {
  public ejercicioUno() {
    document.write("¡Hola Mundo!");
  }
  
  public ejercicioDos() {
    let frace : string="¡Hola Mundo!";
    document.write(frace);
  }
  
  public ejercicioTres() {
    let nombre : any = prompt("Ingresa tu nombre");
    document.write(`¡Hola ${nombre}!`);
  }

  public ejercicioCuatro() {
    let nombre : any = prompt("Ingresa tu nombre");
    let numero : any = prompt("Ingresa un numero entero");

    for(let i: number = 0; i<numero; i++){
      document.write(`¡Hola ${nombre}! <br>`);
    }

  }

  public ejercicioCinco() {
    let nombre : any = prompt("Ingresa tu nombre completo");
  
    let texto : string = nombre.split(' ');
    let palabras : number = texto.length;
    let nombrePriMayus : string = "";
    document.write(nombre.toLowerCase()+"<br>");
    document.write(nombre.toUpperCase()+"<br>");

    for(let i : number = 0; i < palabras; i++){
   
      // console.log(`${texto[i].substring(0,1).toUpperCase()}${texto[i].substring(1,texto[i].length)}`);
      nombrePriMayus=`${nombrePriMayus}${texto[i].substring(0,1).toUpperCase()}${texto[i].substring(1,texto[i].length)}`;
    }
    
    // console.log(nombrePriMayus);
    document.write(nombrePriMayus);

  }

  public ejercicioSeis() {
    let edad : any = prompt("Cual es tu edad");

    if(edad<18){
      document.write(`Eres menor de Edad`);
    }else{
      document.write(`Eres Mayor de Edad`);
    }
    
  }

  public ejercicioSiete() {
    let palabra : any = prompt("Cual es la contraseña");
    let pass : string = "Armi$";
    if(palabra.toLowerCase()== pass.toLowerCase()){
      alert("correcto");
    }else{
      alert("incorrecto");
    }
  }

  public ejercicioOcho() {
    let palabra : any = prompt("Ingrese una palabra");

    for(let i : number = 0; i<10; i++){
      document.write(`${palabra}<br>`);
    }
  }

  public ejercicioNueve() {
    let edad : any = prompt("Cual es tu edad");

    let hoy:any = new Date();
    let ano: number= hoy.getFullYear();
    
    for(let i : number=0; i<edad; i++){

      document.write(hoy.getFullYear()-i+"<br>");
    }
    
  }
  
  public ejercicioDies() {
    let invertir : any = prompt("Cantidad a invertir");
    let anual : any = prompt("Interes Anual");
    let ano : any = prompt("Numero de años");
    let capital: number=0;
    for(let i: number = 0; i<ano; i++){
      capital=capital+invertir*anual;
      document.write(`año ${i+1}, capital: ${capital} <br>`);
    }
  }
  

  public ejecutar() : void {
     
      let opcion : any = prompt(`Selecciona el ejercicio que quieres ver: 
                                  1.- Ejercicio 01
                                  2.- Ejercicio 02
                                  3.- Ejercicio 03
                                  4.- Ejercicio 04
                                  5.- Ejercicio 05
                                  6.- Ejercicio 06
                                  7.- Ejercicio 07
                                  8.- Ejercicio 08
                                  9.- Ejercicio 09
                                  10.- Ejercicio 10
                                  `);
      opcion = parseInt(opcion);
      switch(opcion) {
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
      
  }
}
const Examen = new App();
Examen.ejecutar();
