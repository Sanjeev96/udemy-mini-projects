import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name: 'test', content:'test content'}];

  onServerAdded(serverData:{serverName: string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{printName:string, printContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.printName,
      content: blueprintData.printContent
    });
  }
}
