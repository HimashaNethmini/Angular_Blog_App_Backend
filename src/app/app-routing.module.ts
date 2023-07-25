import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './dashborad/dashborad.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  //define the root route
  { path: '', component: DashboradComponent },
  { path: 'categories', component:CategoriesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
