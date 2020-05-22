import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListPageComponent} from './list-page/list-page.component';
import {DetailsComponent} from './details/details.component';
import {PostDetailsComponent} from './post-details/post-details.component';
const routes: Routes = [

  { path: '', redirectTo: 'list', pathMatch: 'prefix' },
  { path: 'list', component:ListPageComponent },
  {path: 'detail', component:DetailsComponent},
  {path:'posts',component:PostDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
