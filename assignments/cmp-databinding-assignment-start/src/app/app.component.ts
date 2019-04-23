import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public oddNumberArray: number[] = []; // param from emiiter in gamecontrol pushed into this array
  public evenNumberArray: number[] = [];


  ontimeFired(firedNum: number) {
    if (firedNum % 2 == 0) {
      this.evenNumberArray.push(firedNum);
    } else {
      this.oddNumberArray.push(firedNum);
    }
  }

}
