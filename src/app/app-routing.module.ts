import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { AdminMenuComponent } from './shared/components/admin-menu/admin-menu.component';

const routes: Routes = [
  { path :'', component: HomeComponent },
  {path:'admin', component: AdminMenuComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {

 }
