import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  message: string='Vous êtes déconnecté, (pudwill/gary)'
  name:string
  password:string
  auth:AuthService
  deconnexion:number=0;
  constructor(private authService:AuthService,private router:Router){}
  ngOnInit(){
      this.auth=this.authService 
  }
    // Informe l'utilisateur sur son authentfication.
  setMessage() {
      if(this.deconnexion==0){
        if( this.auth.isLoggedIn){
          this.message='Vous êtes connecté.'
        }else{
          this.message = 'Identifiant ou mot de passe incorrect.';
        }
      }else{
        this.message='Vous êtes déconnecté.'
        this.deconnexion=0;
      }

    
  }
  login(){
    this.message='tentative de connexion en cours...'
    this.auth.login(this.name,this.password)
    .subscribe((isLoggedIn:boolean)=>{
      this.setMessage();
      if(isLoggedIn){
        this.router.navigate(['/skaters'])
      }else{
        this.password=''
        this.router.navigate(['/login'])
      }
      
    })
  }
  logout():number{
    this.auth.logout();
    this.deconnexion=1
    this.setMessage;
    console.log('Vous êtes deconnecté')
   
    return this.deconnexion
  }
}
