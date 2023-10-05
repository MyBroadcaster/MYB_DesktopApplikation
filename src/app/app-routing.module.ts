import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { TestingComponent } from './components/testing/testing.component';

const routes: Routes = [
  {path: "testing" ,component: TestingComponent},
  {path: "dashboard" ,component: DashboardComponent},
  {path: "" ,component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
