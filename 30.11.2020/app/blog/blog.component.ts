import { Component, OnInit , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('usrSrvDetails') submit = new EventEmitter <{email: string , comment: string }>();
  email = ' ';
  comment = '';


  constructor() { }

  ngOnInit(): void {
  }
// tslint:disable-next-line:typedef
submitnow() {
  this.submit.emit({
    email: this.email,
    comment : this.comment
  });
  console.log(this.submit);
}
}
