import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsListComponent } from './components/goals/goals-list/goals-list.component';
import { GoalsDetailsComponent } from './components/goals/goals-details/goals-details.component';
import { GoalsAddComponent } from './components/goals/goals-add/goals-add.component';
import { GoalsUpdateComponent } from './components/goals/goals-update/goals-update.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalsListComponent,
    GoalsDetailsComponent,
    GoalsAddComponent,
    GoalsUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
