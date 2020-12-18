import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-formtook',
  templateUrl: './formtook.component.html',
  styleUrls: ['./formtook.component.css']
})
export class FormtookComponent implements OnInit {
  form;
  constructor(private service : ServiceService) { }

  ngOnInit(): void {
    this.form=this.service.addapplication;
  }

}
