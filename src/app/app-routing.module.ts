import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProjectsListComponent} from "./components/projects-list/projects-list.component";
import {ProjectDetailComponent} from "./components/project-detail/project-detail.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'projects', component: ProjectsListComponent},
  {path:'projects/:id', component: ProjectDetailComponent},
  {path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
