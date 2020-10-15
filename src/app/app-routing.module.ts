import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [{
  path:'home',
  component: HomeComponent
},
{
  path:'carts',
  component: CartComponent
},
{
  path:'courses',
  component: CoursesComponent
},
{
  path:'courses/:id',
  component: CourseComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
