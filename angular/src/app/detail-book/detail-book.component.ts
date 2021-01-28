import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {CustomerService} from "../../../../../CaseStudy-MD4/front-end/src/app/Components/customer/customer.service";
import {BookService} from "../book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
id!:any;
book!: Book;
  constructor(
    private route:ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.book=new Book();
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    this.bookService.getBook(this.id)
      .subscribe((data: any) => {
        console.log(data);
        this.book = data;
      }, error => console.log(error));
  }

  list(){
    this.id = this.route.snapshot.params['id'];
    this.router.navigate(['books']);
  }

}
