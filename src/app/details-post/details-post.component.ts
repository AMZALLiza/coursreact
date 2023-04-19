import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.css']
})
export class DetailsPostComponent {
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
