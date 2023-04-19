import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  post:any;
  id:any;
  constructor(private postService:PostService,private activatedroute:ActivatedRoute){}
  ngOnInit(){
        this.activatedroute.paramMap.subscribe(
          params=>{
                this.id=params.get('id');});
                this.postService.getPost(this.id).subscribe(
                  response =>{
                 // console.log(response);
                 this.post=response;

          }
          );


  }

}
