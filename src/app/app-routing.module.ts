import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalsAddComponent } from './components/goals/goals-add/goals-add.component';

const routes: Routes = [
  {path: 'goals/add', component: GoalsAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
