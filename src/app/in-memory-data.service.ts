import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api'
import { SKATERS } from './skater/mock-skater';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() { 
    const skaters=SKATERS
    return {skaters};
  }
}
