class Jugador{
  
  vida:number = 100;
  habilidad:number = 100;
  nombre:string = "";
  ulti:string = "";
  
  constructor(nombre:string, ulti:string){
    this.nombre = nombre;
    this.ulti = ulti;
  }
 
  curar(jugadorObjetivo:any){
    if(this.habilidad<20){
      console.log("No tienes  mana");
    }else{
      jugadorObjetivo.vida +=20;
      this.habilidad-=40;
    }
    
    this.status(jugadorObjetivo);
  }

  
  revivir(jugadorObjetivo:any){
    jugadorObjetivo.vida = 100;
    jugadorObjetivo.habilidad = 100;
    this.status(jugadorObjetivo);
  }

  mana(){
    this.habilidad += 40;
    console.log(`mana: ${this.habilidad}`);
  }

  belzebu(jugadorObjetivo:any){
    jugadorObjetivo.vida-=30;
    jugadorObjetivo.habilidad-=20;
    this.vida+=20;
    this.habilidad-=30;
    this.status(jugadorObjetivo);
  }

  castigoDivino(jugadorObjetivo:any){
      jugadorObjetivo.vida-=60;
      this.habilidad-=60;
      this.status(jugadorObjetivo);
  }

  atacar(jugadorObjetivo:any){
    if(this.habilidad<40){
      console.log("No tienes  mana");
    }else{
      jugadorObjetivo.vida-=20;
      this.habilidad-=40;
      
    }
    this.status(jugadorObjetivo);
  }

  status(jugadorObjetivo:any){
    if(jugadorObjetivo.vida<=0){
      jugadorObjetivo.vida=0;
      console.log(`Perdio ${jugadorObjetivo.nombre}`);
    }
    if(this.vida<=0){
      this.vida=0;
      console.log(`Perdio ${this.nombre}`);
    }
    console.log(jugadorObjetivo);
    console.log(this);
  }

  definitiva(jugadorObjetivo:any){
    if(this.habilidad<=0){
      console.log("No tienes mana");
    }else{
      if(this.ulti=="belzebu"){
        if(this.habilidad<30){
          console.log("No tines mana");
        }else{
          this.belzebu(jugadorObjetivo);
        }
      }else if(this.ulti=="castigoDivino"){
        if(this.habilidad<60){
          console.log("No tines mana");
        }else{
          this.castigoDivino(jugadorObjetivo);
        }
        
      }
    }
    
  }
 
}

let demonio = new Jugador("susuki","belzebu");
let angel = new Jugador("nao","castigoDivino");

console.log(demonio);
console.log(angel);