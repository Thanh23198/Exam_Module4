import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
// @ts-ignore
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    DetailBookComponent,
    ListBookComponent,
    UpdateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
