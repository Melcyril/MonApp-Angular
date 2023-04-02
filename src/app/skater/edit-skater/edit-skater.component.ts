import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skater } from '../skater';
import { SkaterService } from '../skater.service';

@Component({
  selector: 'app-edit-skater',
  template: `
  <h2 class="center">Editer {{skater?.name}}</h2>
  <p *ngIf="skater" class="center">
    <img [src]="skater.picture" height="300px">
  </p>
  <app-skater-form *ngIf="skater" [skater]="skater"></app-skater-form>
  `,
  styles: [
  ]
})
export class EditSkaterComponent {
  skater:Skater|undefined;
  constructor(
    private route: ActivatedRoute,
    private skaterService:SkaterService
  ){}
  ngOnInit(){
    const skaterId: string|null=this.route.snapshot.paramMap.get('id')
    if(skaterId){
      this.skaterService.getSkaterById(+skaterId).subscribe(skater=>this.skater=skater)
    }else{
      this.skater=undefined
    }
  }
}
