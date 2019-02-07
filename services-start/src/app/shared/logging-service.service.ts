import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  constructor() { }

  logStatusChange(status: string) {
    console.log('Status = ' + status);

  }
}
