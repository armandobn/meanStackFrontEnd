class Personaje{
  public atacar() : number{
    return 1;
  }

  public defender() : string{
    return 'roldan';
  }

  public matar() : boolean{
    return true;
  }

  public revivir() : number[]{
    return [1,2,3];
  }

  public curar() : void{

  }
}


const pj = new Personaje();
console.log(pj.defender());

