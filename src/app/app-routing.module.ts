import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalsListComponent } from './components/goals/goals-list/goals-list.component';

const routes: Routes = [
  // Goals routes
  {path: '', component: GoalsListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
