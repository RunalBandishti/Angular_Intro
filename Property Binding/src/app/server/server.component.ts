import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  allowNewServer = false;
  serverId = 10;
  serverStatus = 'offline';

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

}
