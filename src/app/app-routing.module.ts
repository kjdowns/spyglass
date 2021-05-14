import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalsAddComponent } from './components/goals/goals-add/goals-add.component';
import { GoalsListComponent } from './components/goals/goals-list/goals-list.component';
import { GoalsUpdateComponent } from './components/goals/goals-update/goals-update.component';

const routes: Routes = [
  // Goals routes
  {path: '', component: GoalsListComponent},
  {path: 'goals/add', component: GoalsAddComponent},
  {path: 'goals/update', component: GoalsUpdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
