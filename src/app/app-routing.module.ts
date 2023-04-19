import { ListauthorComponent } from './listauthor/listauthor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { DetailsPostComponent } from './details-post/details-post.component';
const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"app-navbar"},
    {path:"admin",component:AdminComponent },
    {path:"home",component:HomeComponent },
    {path:"addPost",component:AddPostComponent },
    {path:"update/:id",component:UpdatePostComponent },
    {path:"listauthor",component:ListauthorComponent },
    {path:"detailsPost/:id",component:DetailsPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
