import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { SKATERS } from '../mock-skater';
import { Skater } from '../skater';
import { SkaterService } from '../skater.service';

@Component({
  selector: 'app-list-skater',
  templateUrl: './list-skater.component.html',
  styles: [
  ]
})
export class ListSkaterComponent implements OnInit{

  skaterList:Skater[];

  constructor(private router:Router, private skaterService:SkaterService){}

ngOnInit(){
  this.skaterService.getSkaterList()
    .subscribe(skaterList=>this.skaterList=skaterList);
}

  goToSkater(skater:Skater){
    this.router.navigate(['/skater',skater.id])
  }
}
