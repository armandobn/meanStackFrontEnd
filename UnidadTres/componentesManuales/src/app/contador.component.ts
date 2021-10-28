import {Component} from '@angular/core';

@Component({
  selector : 'app-contador',
  templateUrl : 'contador.component.html',
  styleUrls : ['contador.component.css']
})

export class ContadorComponent {
  public title : string = "Mi componente Manual";
  public numero:number = 0;
  public sumarRestar(valor:number){
    this.numero=this.numero + valor;
  }
}