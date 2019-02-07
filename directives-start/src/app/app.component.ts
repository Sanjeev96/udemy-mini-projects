import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddnumbers = [1, 3, 5];
  evennumbers = [2,4];
  onlyOdd = false;
  value = 1001;
}
