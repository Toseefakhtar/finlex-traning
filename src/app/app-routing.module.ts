import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './components/blog/blog.component'
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { DetailsComponent } from './components/details/details.component';
import { FinlexTagComponent } from './components/finlex-tag/finlex-tag.component';

const routes: Routes = [
  {path: 'blog' , component: BlogComponent},
  {path: 'form' , component: ParentComponentComponent},
  {path: 'detail' , component: DetailsComponent},
  {path: 'tag' , component: FinlexTagComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
