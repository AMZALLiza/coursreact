import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  posts:any;
  post:any;
  constructor(private postService:PostService,private router:Router){}
    ngOnInit(): void {

        this.refresh();
        }





    deletePost(id:number){
      if (confirm("Êtes-vous sûr de vouloir supprimer ?")) {
        console.log("Implémenter la fonctionnalité de suppression ici");


      this.postService.deletePost(id).subscribe(
        data=>{

          this.refresh();
          this.router.navigate(['admin/']);

        }
      )}
      this.router.navigate(['admin/']);
    }
    detailsPost(id:number){
      this.router.navigate(['detailsPost/'+id]);

    }
    updatePost(id:any){
      this.router.navigate(['update/'+id]);
    }
    refresh(){

      this.postService.getPosts().subscribe(
        data=>{
          this.posts=data;
          console.log(this.posts);
    }
   );
  }



}



