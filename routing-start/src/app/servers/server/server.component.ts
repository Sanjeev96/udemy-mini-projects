import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Route, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = parseInt(this.activeRoute.snapshot.params['id']);
    this.server = this.serversService.getServer(id);
    this.activeRoute.params
      .subscribe(
        (params: Params) => {
          this.server = this.serversService.getServer(parseInt(params['id']))
        });
  }

  onEditServer(event: any) {
    console.log('click click', event);
    alert('hello');

  }

}
