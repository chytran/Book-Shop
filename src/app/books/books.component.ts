import { Component, OnInit } from '@angular/core';

interface Book {
  name: string
  author: string
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [
    {
      name: "James Bonds",
      author: "Mr. James Bonds",
    },
    {
      name: "James Bonds",
      author: "Mr. James Bonds",
    }
  ];

  

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
