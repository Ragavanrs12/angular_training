import { Component, OnInit } from '@angular/core';
import { ServerServicesService } from '../server-services.service';
@Component({
  selector: 'app-server-creation',
  templateUrl: './server-creation.component.html',
  styleUrls: ['./server-creation.component.css']
})
export class ServerCreationComponent implements OnInit {
  id: number;
  type: string;
  name: string;
  status: string;
  serverTypeList = [];
  serverStatusList = [];
  constructor(private serverData: ServerServicesService) { }

  ngOnInit(): void {
    this.serverTypeList = this.serverData.serverType;
    this.serverStatusList = this.serverData.serverStatus;
  }

  // tslint:disable-next-line:typedef
  addServerData(formData){
    this.serverData.addDataToServer(formData);
  }

}
