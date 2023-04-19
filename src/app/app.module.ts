import { NavbarComponent } from './navbar/navbar.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";
import { HomeComponent } from './home/home.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ListauthorComponent } from './listauthor/listauthor.component';
import { DetailsPostComponent } from './details-post/details-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    HomeComponent,
    UpdatePostComponent,
    AddPostComponent,
    ListauthorComponent,
    DetailsPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
