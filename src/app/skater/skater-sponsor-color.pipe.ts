import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skaterSponsorColor'
})
export class SkaterSponsorColorPipe implements PipeTransform {


    transform(sponsor: string): string {
  
      let color: string;
    
      switch (sponsor) {
        case 'Birdhouse':
          color = 'red lighten-1';
          break;
        case 'Powell':
          color = 'blue lighten-1';
          break;
        case 'Darkstar':
          color = 'green lighten-1';
          break;
        case 'Speed Demons':
          color = 'brown lighten-1';
          break;
        case 'Matix':
          color = 'grey lighten-3';
          break;
        case 'Globe':
          color = 'blue lighten-3';
          break;
        case 'ThankYou':
          color = 'deep-purple accent-1';
          break;
        case 'Adidas':
          color = 'pink lighten-4';
          break;
        case 'Nike SB':
          color = 'deep-purple darken-2';
          break;
        case 'Volcom':
          color = 'lime accent-1';
          break;
        case 'Primitive':
          color = 'deep-orange';
          break;
        default:
          color = 'grey';
          break;
      }
    
      return 'chip ' + color;
    
    }
  }


