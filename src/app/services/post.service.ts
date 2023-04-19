
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http:HttpClient) {

  }


 //get Posts
 getPosts(){
  return this.http.get("http://.bloggy.ecole-it.devigne.space/posts/");
 }
 addPost(post:any){
  return this.http.post("http://.bloggy.ecole-it.devigne.space/posts/",post);
 }
 deletePost(id:number){
  return this.http.delete("http://.bloggy.ecole-it.devigne.space/posts/"+id);
 }
 getPost(id:number){
  return this.http.get("http://.bloggy.ecole-it.devigne.space/posts/"+id);
 }
 updatePost(id:number,new_post:any){
  return this.http.put("http://.bloggy.ecole-it.devigne.space/posts/"+id,new_post);


 }
}
