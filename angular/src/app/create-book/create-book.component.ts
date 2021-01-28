import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {Router} from "@angular/router";
import {Book} from "../book";



@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
book!: any
  constructor(
    private bookService:BookService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  this.book=new Book();

  }

  addBook(){
  console.log(121212);
  console.log(this.book);
  console.log(111);
  this.bookService.createBook(this.book).subscribe(
    data=>{
      console.log(data);
      this.router.navigate(['books']);
      this.book=new Book();
    }
  )
  }



}
