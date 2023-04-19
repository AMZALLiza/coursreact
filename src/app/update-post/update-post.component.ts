import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent {
  constructor(private postService:PostService,private activeRoute:ActivatedRoute,private router:Router){
  }
  post:any;
  public postToUpdate:any;
  public title:any;
  public author_id:any;
  public image_url:any;
  public resume:any;
  public content:any;
   private id:any;
  ngOnInit(){
    this.activeRoute.paramMap.subscribe(
      params=>{
            this.id=params.get('id');});
            this.postService.getPost(this.id).subscribe(
              response =>{
             // console.log(response);
             this.post=response;
             this.title=this.post.title;
             this.author_id=this.post.author_id;
             this.image_url=this.post.image_url;
             this.resume=this.post.resume;
             this.content=this.post.content;

      }
      );


}
updatePost(){
  this.postToUpdate={
    'title':this.title,
    'author_id':this.author_id,
    'image_url':this.image_url,
    'resume':this.resume,
    'content':this.content

  }
  this.postService.updatePost(this.id,this.postToUpdate).subscribe(
    Response=>{
      console.log(Response);
      this.router.navigate(['admin'])
    }
  )
}


}
