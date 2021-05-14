import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalsAddComponent } from './components/goals/goals-add/goals-add.component';
import { GoalsDetailsComponent } from './components/goals/goals-details/goals-details.component';
import { GoalsListComponent } from './components/goals/goals-list/goals-list.component';

const routes: Routes = [
  // Goals routes
  {path: '', component: GoalsListComponent},
  {path: 'goals/add', component: GoalsAddComponent},
  {path: 'goals/:id', component: GoalsDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
