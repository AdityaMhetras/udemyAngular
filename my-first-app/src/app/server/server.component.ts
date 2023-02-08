import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white
        }
    `]
})
export class ServerComponent{

    private serverId: number = 11;
    private serverStatus: string = 'offline';
    
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    public getServerStatus() {
        return this.serverStatus;
    }

    public getServerId() {
        return this.serverId;
    }

    public getColor() {
        return this.serverStatus==='online'? 'green' : 'red';
    }

}