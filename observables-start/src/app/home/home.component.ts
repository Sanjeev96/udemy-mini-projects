import { Component, OnInit } from '@angular/core';
import { Observable, interval, Observer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // interval is a utility function used in rxj
    const myNum = interval(1000);
    myNum.subscribe(number => {
      console.log('this is the number', number );
    });

    // const myObservable = create((observer: Observer) => {

    // });
  }
}
