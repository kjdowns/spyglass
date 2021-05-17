import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsListComponent } from './components/goals/goals-list/goals-list.component';
import { GoalsDetailsComponent } from './components/goals/goals-details/goals-details.component';
import { GoalsAddComponent } from './components/goals/goals-add/goals-add.component';
import { GoalsUpdateComponent } from './components/goals/goals-update/goals-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { GreetingComponent } from './components/greeting/greeting.component';
=======
import { ChartsProgressComponent } from './components/charts/charts-progress.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

>>>>>>> 588c84a6b4e3ba88785b15d2828d629f6296db9a

@NgModule({
  declarations: [
    AppComponent,
    GoalsListComponent,
    GoalsDetailsComponent,
    GoalsAddComponent,
    GoalsUpdateComponent,
<<<<<<< HEAD
    GreetingComponent
=======
    ChartsProgressComponent
>>>>>>> 588c84a6b4e3ba88785b15d2828d629f6296db9a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxChartsModule
        
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
