import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  name: string = "James Bonds";
  author: string = "Mr. James Bonds";

  isShowing: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBooks() {
    // if isShowing is true, make it false
    // vice versa
    this.isShowing = !this.isShowing;
  }

}
