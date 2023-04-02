import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounce, debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Skater } from '../skater';
import { SkaterService } from '../skater.service';

@Component({
  selector: 'app-search-skater',
  templateUrl: './search-skater.component.html',
  styles: [
  ]
})
export class SearchSkaterComponent implements OnInit{
  //flux de recherche dans le temps
  searchTerms=new Subject<string>()
  nameSkaters$:Observable<Skater[]>
  surnameSkaters$:Observable<Skater[]>

  constructor(private router:Router,  private skaterService: SkaterService){}

  ngOnInit():void{
    this.surnameSkaters$=this.searchTerms.pipe(
      //effectue la requete toutes 300ms seconde ce qui evite trop de demande au serveur
      debounceTime(300),
      //distinct permet d'eviter de requeter le serveur si la même recherche a été faite
      distinctUntilChanged(),
      switchMap((term)=>this.skaterService.searchSkaterSurname(term),
      ) 
    )
    this.nameSkaters$=this.searchTerms.pipe(
      //effectue la requete toutes 300ms seconde ce qui evite trop de demande au serveur
      debounceTime(300),
      //distinct permet d'eviter de requeter le serveur si la même recherche a été faite
      distinctUntilChanged(),
      switchMap((term)=>this.skaterService.searchSkaterName(term),
      ) 
    )
  }
  search(term:string){
    this.searchTerms.next(term)
    console.log(term);
  }


  goToDetail(skater:Skater){

    const link=['/skater',skater.id]
    this.router.navigate(link);
  }
}
