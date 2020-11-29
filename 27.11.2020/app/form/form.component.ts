import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  allUser;
  isEdit = false;
  msg: any;
  submitted = false;
  info = false;
  userObject = {
    email: '',
    mobile: '',
    password: '',
    repassword: '',
    isstaff: false,
    id: ''
  };
  title = 'hello ragav this is took from component.ts';
  constructor(){
  }

  ngOnInit(): void{
  }
}
