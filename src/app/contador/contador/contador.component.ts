import { Component } from "@angular/core";

@Component({
    selector: "app-contador",
    template: `
        <h1> {{title}}</h1>
        <h3>la base es 5</h3>

        <button (click)="acumular(base)">{{base}}</button>




        <span> {{numero}} </span>


        <button (click)="acumular(-base)"> {{base}}</button>

    
`
})
export class ContadorComponent {
    title : string = 'Contador app';
  numero: number = 5;
  base  : number = 5;

  acumular (valor: number) {
    this.numero += valor;
  }


}