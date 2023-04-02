import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skater } from '../skater';
import { SkaterService } from '../skater.service';

@Component({
  selector: 'app-skater-form',
  templateUrl: './skater-form.component.html',
  styleUrls:['./skater-form.component.css']

})

export class SkaterFormComponent {
  @Input() skater:Skater;
  sponsors: string[];
  isAddForm:boolean;


  constructor(private skaterService:SkaterService, private router:Router){}

  ngOnInit(){
    this.sponsors=this.skaterService.getSkaterSponsorList();
    this.isAddForm=this.router.url.includes('add')
  }
  hasFootedRegular():boolean{
    if(this.skater.footed.toLowerCase()=='regular'){
      return true
    
    }else{
      return false
    }
}
hasFootedGoofy():boolean{
  if(this.skater.footed.toLowerCase()=='goofy'){
    return true
  
  }else{
    return false
  }
}
  hasSponsor(sponsor:string):boolean{
      return this.skater.sponsor.includes(sponsor);
  }

  selectSponsor($event:Event,sponsor:string){
    const isChecked: boolean=($event.target as HTMLInputElement).checked
    if(isChecked){
      this.skater.sponsor.push(sponsor)
    }else{
      const index=this.skater.sponsor.indexOf(sponsor)
      this.skater.sponsor.splice(index,1)
    }
  }

  isSponsorsValid(sponsor:string):boolean{
    //cas il y a un seule sponsor car il faut au moins 1 sponsor
    if(this.skater.sponsor.length==1 && this.hasSponsor(sponsor)){
        return false;
    }
    //5 sponsor max
    if(this.skater.sponsor.length>5 && this.hasSponsor(sponsor)){
      return false;
    }
    return true;
  }
  footedSkater(foot:string){
    if(foot=='regular'){
      this.skater.footed='regular'
    }else{
      this.skater.footed='goofy'
    }
  }
  footedCheckedRegular():boolean{
    if(this.skater.footed=='regular'){
      return true
    }else{
      return false
    }
  }
  onSubmit(){
    console.log('Submit Form !')
    if(this.isAddForm){
      this.skaterService.addSkater(this.skater)
      .subscribe((skater:Skater)=>
      this.router.navigate(['/skater',skater.id])
      )
    }else{
    this.skaterService.updateSkater(this.skater)
    .subscribe(()=>
      this.router.navigate(['/skater',this.skater.id])
      
    )
    //this.router.navigate(['/skater',this.skater.id])
    }
  }
}
