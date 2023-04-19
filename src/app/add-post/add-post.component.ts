import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { AuthorService } from '../services/author.service';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  authors:any;
  constructor(private postService:PostService,private router:Router,private authorService: AuthorService){

  }
  ngOnInit(): void {

   this.refrech();

     }

  createPost(postform:any)
  {
    let title=postform.value.title;
    let author_id=postform.value.author_id;
    let image_url=postform.value.image_url;
    let resume=postform.value.resume;
    let content=postform.value.content;
    let post={
      "title":title,
      "author_id":author_id,
      "image_url":image_url,
      "resume":resume,
      "content":content
    }
    this.postService.addPost(post).subscribe(
      data=>{
        alert("Post Added");
        console.log(data);
        this.router.navigate(['admin'])
      }
    );

      }
      refrech() {

         this.authorService.getAuthors().subscribe(

         data=> {

        this.authors = data;

         console.log(this.authors);

         }

         );

        }


}



