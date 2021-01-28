import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../../../../../CaseStudy-MD4/front-end/src/app/Components/customer/customer";
import {Book} from "../book";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
book!:any;
id!:any;
  constructor(
    private bookService: BookService,
    private router:Router,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.book = new Book();
    this.bookService.getBook(this.id).subscribe(
      data => {
        this.book = data;
      },error => console.log(error)

    )

  }

  editBook(){
    this.bookService.updateBook(this.id,this.book).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['books']);
      },error => console.log(error)
    )
  }

}
