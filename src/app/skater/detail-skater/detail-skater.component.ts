import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Skater } from '../skater';
import { SkaterService } from '../skater.service';
@Component({
  selector: 'app-detail-skater',
  templateUrl: './detail-skater.component.html',
})
export class DetailSkaterComponent {
    skaterList: Skater[];
    skater: Skater|undefined;
    constructor(private route:ActivatedRoute,private router: Router,private skaterService:SkaterService){}
    
    ngOnInit(){
      const skaterId: string|null=this.route.snapshot.paramMap.get('id');
      if(skaterId){
        this.skaterService.getSkaterById(+skaterId).subscribe(skater=>this.skater=skater)
      }
    }
    goToSkaterList(){
      this.router.navigate(['/skaters'])
    }
    goToEditSkater(skater:Skater){
      this.router.navigate(['/edit/skater',skater.id])
    }
    deleteSkater(skater:Skater){
      this.skaterService.deleteSkaterById(skater.id)
      .subscribe(()=>this.goToSkaterList())
    }
}

