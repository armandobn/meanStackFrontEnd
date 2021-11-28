import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Usando Modelos en Angular';

  public inventario:any = [
    {id: 1, nombre:"Pantalon" ,precio: 250},
    {id: 2, nombre:"Chamarra" ,precio: 500}
  ];

  public formulario:any={
    id : null,
    nombre : null,
    precio : null
  };

  public seleccionar(articulos : any) : void{
    this.formulario.id = articulos.id;
    this.formulario.nombre = articulos.nombre;
    this.formulario.precio = articulos.precio;
  }

  public limpiar() : void{
    this.formulario.id = "";
    this.formulario.nombre = "";
    this.formulario.precio = "";
  }

  public eliminar (id : number) : void{
    for(let index = 0; index < this.inventario.length; index++){
      if(this.inventario[index].id == id){
        this.inventario.splice(index, 1);
        alert("Eliminado con Exito");
        break;
      }
    }
  }

  public agregar() : void{
    
    let datoNuevo = {
      id : this.formulario.id,
      nombre : this.formulario.nombre,
      precio : this.formulario.precio
    }
    let rep: number=0;
    for (let index = 0; index < this.inventario.length; index++) {
      
      if(parseInt(this.inventario[index].id) == parseInt(datoNuevo.id)){
        //alert("Existe ID");
        rep=1;
        break;
      }else{
      
      }
      
    }

    if(rep==1){
      alert("Existe ID");
    }else{
      if(datoNuevo.id==null && datoNuevo.nombre==null || datoNuevo.nombre=="" && datoNuevo.precio==null){
        alert("LLena todos los campos");
      }else if(datoNuevo.id==null){
        alert("LLena el Campos ID");
      }else if(datoNuevo.nombre==null || datoNuevo.nombre==""){
        alert("LLena el Campo Nombre");
      }else if(datoNuevo.precio==null){
        alert("LLena el Campo Precio");
      }else{
        this.inventario.push(datoNuevo);
        alert("Agregado con exito!!");
        this.limpiar();
      }
    }
    
  }

  public editar() : void{
    let datoNuevo = {
      id : this.formulario.id,
      nombre : this.formulario.nombre,
      precio : this.formulario.precio
    }
    if(datoNuevo.id==null && datoNuevo.nombre==null || datoNuevo.nombre=="" && datoNuevo.precio==null){
      alert("LLena todos los campos");
    }else if(datoNuevo.id==null){
      alert("LLena el Campos ID");
    }else if(datoNuevo.nombre==null || datoNuevo.nombre==""){
      alert("LLena el Campo Nombre");
    }else if(datoNuevo.precio==null){
      alert("LLena el Campo Precio");
    }
    for (let index = 0; index < this.inventario.length; index++) {
      if(this.inventario[index].id == this.formulario.id){
        this.inventario[index].id = this.formulario.id;
        this.inventario[index].nombre = this.formulario.nombre;
        this.inventario[index].precio = this.formulario.precio;
        alert("Modificado con Exito");
        this.limpiar();
        break;
      }
      
    }
  }

}
