import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private route : Router,private service : ServiceService ,private router: ActivatedRoute) { }
  model: any = {};
  companyname;
  ngOnInit(): void {
  this.router.queryParams.subscribe(data=>{
    this.companyname=data["name"];
  })
  }
  onSubmit(form) {
    console.log(this.model)
    this.service.addapplication(form);
    this.route.navigate(['/submitted'])
  }


}
