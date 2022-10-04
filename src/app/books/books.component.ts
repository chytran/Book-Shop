import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  name: string = "James Bonds";
  author: string = "Mr. James Bonds";
  isDisabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
