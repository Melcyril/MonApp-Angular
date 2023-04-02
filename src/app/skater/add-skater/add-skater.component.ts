import { Component } from '@angular/core';
import { Skater } from '../skater';

@Component({
  selector: 'app-add-skater',
  template: `
    <h2 class="center">
      Ajouter un skater
    </h2>
    <app-skater-form [skater]="skater"></app-skater-form>
  `,
  styles: [
  ]
})
export class AddSkaterComponent {
  skater:Skater
  ngOnInit(){
    this.skater=new Skater();
  }
}
