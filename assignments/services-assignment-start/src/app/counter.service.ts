import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  countActiveChange(id: number) {
    console.log('set', id, 'to Inactive');

  }

  countInactiveChange(id: number) {
    console.log('set', id, 'to Active');
  }
}

