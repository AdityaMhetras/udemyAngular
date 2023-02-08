import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  hiddenText = true;
  serverCreationStatus = 'No server created';
  servername='TestServer';
  serverCreated = false;
  servers= ['testServer','testServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      this.hiddenText = false;
    },2000);
  }

  onCreateServer() {
    this.serverCreationStatus ='server was created, name is '+this.servername;
    this.serverCreated = true;
    this.servers.push(this.servername);
  }

  onUpdateServerName(event: Event) {
    this.servername = (<HTMLInputElement>event.target).value;

  }
}
