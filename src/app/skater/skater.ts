export class Skater {
  id: number;
  name: string;
  surname: string;
   age:number;
  footed:string;
  picture: string;
  information:string;
  sponsor: Array<string>;
  created: Date;

  constructor(
    name:string='Entrer un nom...',
    surname:string='Entrer un prénom',
    age:number=5,
    picture:string='',
    footed:string='goofy',
    information:string='Infos',
    sponsor:string[]= [],
    created: Date=new Date()
   
  ){
    
    this.name= name;
    this.surname= surname;
    this. age=age;
    this.footed=footed;
    this.picture= picture;
    this.information=information;
    this.sponsor=sponsor;
    this.created=created;
  }
}