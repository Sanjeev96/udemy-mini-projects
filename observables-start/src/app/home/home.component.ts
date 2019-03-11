import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public numberObsSub: Subscription;
  public customObsSub: Subscription;

  constructor() {}

  ngOnInit() {
    // interval; is; a; utility; function used in rxj;
    const myNum = interval(1000);

    this.numberObsSub = myNum.subscribe(number => {
      console.log('this is the number', number);
    });

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });

    this.customObsSub = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }

  ngOnDestroy() {
    // used to stop memeory leak - subscription running when not needed are inefficent
    this.numberObsSub.unsubscribe();
    this.customObsSub.unsubscribe();
  }
}
