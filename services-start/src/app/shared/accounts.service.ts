import { Injectable } from '@angular/core';
import { LoggingServiceService } from './logging-service.service';
import { EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  accounts = [
    {
      name: 'hard Coded Test 1',
      status: 'active'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private logService: LoggingServiceService) { }


  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.logService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.logService.logStatusChange('new status ' + status);
  }
}