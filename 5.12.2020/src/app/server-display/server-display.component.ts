import { Component, OnInit } from '@angular/core';
import { ServerServicesService } from '../server-services.service';
@Component({
  selector: 'app-server-display',
  templateUrl: './server-display.component.html',
  styleUrls: ['./server-display.component.css']
})
export class ServerDisplayComponent implements OnInit {
  serverType: string[];
  servers: any[];
  type: any;

  // constructor() { }

  // ngOnInit(): void {
  // }
constructor(private serverData: ServerServicesService) { }

  ngOnInit(): void {
    this.serverType = this.serverData.serverType
    this.servers = this.serverData.servers
  }

  setType(type){
    this.type = type;
  }

  editData(){
    
  }
}
