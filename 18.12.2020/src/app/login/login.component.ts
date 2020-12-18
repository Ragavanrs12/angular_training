import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email='';
  password=''
  valid= false;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(form){
    if((form.email).match('ragavan@gmail.com') )
    {
      if((form.password).match('1234'))
      this.route.navigate(['/naukri'])
    this.valid=false;
    }
    else{
      this.valid=true;
    }
    this.handleclear()
console.log(form)
  }
  handleclear() {
    this.email='';
    this.password=''

  }

}
