import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ["spiderman", "superman", "goku", "iroman"];
  HeroesBorrados: string[] = [];
  
  

  borrarHeroe() {

    const heroeBorrado = this.heroes.shift();
    this.HeroesBorrados.push(heroeBorrado!);
    
  }
}

