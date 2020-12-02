import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  email = ' ';
  comment = '';
  submit = [];
  // tslint:disable-next-line:typedef
  submitnow(event: {email: string, comment: string}) {
    this.submit.push({
      email: event.email,
      comment: event.comment
    });
    console.log(this.submit);
  }

}
