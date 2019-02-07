import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import {  setInterval,clearInterval} from 'timers';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() timeEmitter = new EventEmitter<number>() //emits variable numberCounter
  public timer: any
  public numberCounter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  StartGame() {
    this.timer = setInterval(() => {
      this.timeEmitter.emit(this.numberCounter+=1);
    }, 1000);

  }

  EndGame() {
    clearInterval(this.timer);
  }

}
