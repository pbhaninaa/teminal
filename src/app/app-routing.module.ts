import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 const routes: Routes = [
//   { path :'', component: HomeComponent },
//   {path:'admin', component: AdminMenuComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {

 }
