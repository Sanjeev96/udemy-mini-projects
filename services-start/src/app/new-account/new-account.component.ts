import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { LoggingServiceService } from '../shared/logging-service.service';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {


  constructor(private logService: LoggingServiceService, private accountsService: AccountsService) { }

  ngOnInit() {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => {alert('newStatus') + status}
    );

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)

    // this.logService.logStatusChange(accountStatus)
  }
}
