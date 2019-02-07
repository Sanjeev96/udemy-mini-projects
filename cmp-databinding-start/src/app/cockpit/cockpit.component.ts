import { Component, OnInit, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ printName: string, printContent: string }>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit(
      {
        serverName: this.newServerName,
        serverContent: this.newServerContent
      }
    );
  }

  onAddBlueprint() {
    this.blueprintCreated.emit(
      {
        printName: this.newServerName,
        printContent: this.newServerContent
      }
    );
  }



}
