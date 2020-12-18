import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-naukri',
  templateUrl: './naukri.component.html',
  styleUrls: ['./naukri.component.css']
})
export class NaukriComponent implements OnInit {
search='';
  constructor(private service: ServiceService ,private route: Router) { }
details;
  ngOnInit(): void {
  this.details=this.service.company;
  }
  onApply(company){
this.route.navigate(['/form'],{
  queryParams:{
    name:company.name
  }
})

  }

}
