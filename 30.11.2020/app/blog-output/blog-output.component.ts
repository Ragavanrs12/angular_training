import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-output',
  templateUrl: './blog-output.component.html',
  styleUrls: ['./blog-output.component.css']
})
export class BlogOutputComponent implements OnInit {
 @Input()element: {email: string , comment: string};
  constructor() { }

  ngOnInit(): void {
  }
}
