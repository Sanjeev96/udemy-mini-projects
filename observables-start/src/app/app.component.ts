import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from './users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,  OnDestroy {
  user1Actvivated = false;
  user2Actvivated = false;
  public userSubscription: Subscription;

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userSubscription = this.userService.userActivated.subscribe(id => {
      if (id === 1) {
        this.user1Actvivated = true;
      } else if (id === 2) {
        this.user2Actvivated = true;
      }
    });
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }
}
