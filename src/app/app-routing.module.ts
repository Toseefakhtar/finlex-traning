import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './components/blog/blog.component'
import { ParentComponentComponent } from './components/parent-component/parent-component.component';

const routes: Routes = [
  {path: 'blog' , component: BlogComponent},
  {path: 'form' , component: ParentComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
