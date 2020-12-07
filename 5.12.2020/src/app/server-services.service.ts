import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerServicesService {
servers = [];
serverType = ['Development Server', 'Test Server', 'Staging Server', 'Production Server'];
serverStatus = [ 'Active', 'Inactive' , 'Unknown'];
  constructor() { }
// tslint:disable-next-line:typedef
addDataToServer(serverData){
  this.serverStatus.push(serverData);
}
// tslint:disable-next-line: typedef
addServerType(type){
this.serverType.push(type);
}

}
