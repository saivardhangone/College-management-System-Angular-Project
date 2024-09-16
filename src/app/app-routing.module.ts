import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderPageComponent } from './College/Header/header-page/header-page.component';
import { ContactComponent } from './College/Header/contact/contact.component';
import { CoursesComponent } from './College/Header/courses/courses.component';
import { AboutusComponent } from './College/Header/aboutus/aboutus.component';


const routes: Routes = [
  {path:"home",component:HeaderPageComponent},
  {path:"contact",component:ContactComponent},
  {path:"courses",component:CoursesComponent},
  {path:"aboutus",component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
