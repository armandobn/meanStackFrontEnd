import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  
})
export class AppComponent {
  public title:string = 'Contador con Angular';
  public numero:number = 0;

  public sumarRestar(valor:number){
    this.numero=this.numero + valor;
  }

  // public sumar(){
  //   this.numero++;
  // }

  // public restar(){
  //   this.numero--;
  // }
}
