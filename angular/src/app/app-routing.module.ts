import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListBookComponent} from "./list-book/list-book.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {UpdateBookComponent} from "./update-book/update-book.component";
import {DetailBookComponent} from "./detail-book/detail-book.component";

const routes: Routes = [
  {path: "", component: ListBookComponent},
  {path: "books", component: ListBookComponent},
  {path: "books/add", component: CreateBookComponent},
  {path: "books/edit/:id", component: UpdateBookComponent},
  {path: 'details/:id', component: DetailBookComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
