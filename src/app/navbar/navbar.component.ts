import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private postService:PostService,private router:Router){}
  detailsPost(id:number){
    this.router.navigate(['detailsPost/'+id]);

  }

}
