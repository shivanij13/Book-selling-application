import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {


  Book: any = {
    "Id": 1,
    "Name": "Deep Work",
    "Type": "Novel",
    "Price": 12000
  }

  constructor() { }

  ngOnInit() {
  }

}
