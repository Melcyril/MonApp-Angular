import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Skater } from './skater';

@Injectable()
export class SkaterService {
  constructor(private http: HttpClient){}
  
  getSkaterList():Observable<Skater[]>{ 
    //return SKATERS;
    return this.http.get<Skater[]>('api/skaters').pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handleError(error,[]))
      );  
  } 

  getSkaterById(skaterId:number):Observable<Skater|undefined>{
    //return SKATERS.find(skater=>skater.id==skaterId);
    return this.http.get<Skater>(`api/skaters/${skaterId}`).pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handleError(error,undefined))
      );  
  }
  
updateSkater(skater:Skater): Observable<null>{
  const HttpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  return this.http.put('api/skaters',skater,HttpOptions).pipe(
    tap((response)=>this.log(response)),
    catchError((error)=>this.handleError(error,null))
  );
}
addSkater(skater:Skater):Observable<Skater>{
  const HttpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  return this.http.post<Skater>('api/skaters',skater,HttpOptions).pipe(
    tap((response)=>this.log(response)),
    catchError((error)=>this.handleError(error,null))
  );
}
deleteSkaterById(skaterId:number): Observable<null>{
  return this.http.delete(`api/skaters/${skaterId}`).pipe(
    tap((response)=>this.log(response)),
    catchError((error)=>this.handleError(error,undefined))
    ); 
}

searchSkaterName(term:string):Observable<Skater[]>{
  if(term.length<=1){
    return of([])
  }
  return this.http.get<Skater[]>(`api/skaters/?name=${term}`).pipe(
    tap((response)=>this.log(response)),
    catchError((error)=>this.handleError(error,[]))
    ); 
}
searchSkaterSurname(term:string):Observable<Skater[]>{
  if(term.length<=1){
    return of([])
  }
  return this.http.get<Skater[]>(`api/skaters/?surname=${term}`).pipe(
    tap((response)=>this.log(response)),
    catchError((error)=>this.handleError(error,[]))
    ); 
}



private log(response: any){
    console.table(response)
}

private handleError(error:Error,errorValue:any){
  console.error(error)
  return of(errorValue)
}
  getSkaterSponsorList():string[]{
    return['Birdhouse','Powell','Darkstar','Speed Demons','Matix','Globe',
              'ThankYou','Adidas','Nike SB','Volcom','Primitive'];
  }
}
