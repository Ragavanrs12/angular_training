import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
model;
  constructor(private service : ServiceService,private route:Router) { }

  ngOnInit(): void {
    this.model=this.service.application 
  console.log(this.model)
  }
  form(){
    this.route.navigate(['form/formtook'])
  }

}
