import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDosComponent } from './to-dos/to-dos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToDoDetailComponent } from './to-do-detail/to-do-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ToDoDetailComponent },
  { path: 'todos', component: ToDosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
