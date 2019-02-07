import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingServiceService } from '../shared/logging-service.service';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private logService: LoggingServiceService, private accountsService: AccountsService) { }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // console.log(this.logService.logStatusChange(status));
    this.accountsService.statusUpdated.emit(status);
  }
}
