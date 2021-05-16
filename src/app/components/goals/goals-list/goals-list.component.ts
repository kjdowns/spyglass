import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal } from 'src/app/models/goal';
import { GoalService } from 'src/app/service/goal.service';

@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.css']
})
export class GoalsListComponent implements OnInit {

  GOALS: Goal[] = [];

  constructor(private goalService: GoalService) { }

  ngOnInit(): void {
    this.retrieveGoals();
  }

  retrieveGoals(): void {
    this.goalService.getAll()
      .subscribe(data => {
        this.GOALS = data;
        console.log(this.GOALS);
      },
        error => {
          console.log(error);
    });
  }

  private displayProgress(current, total){
    return Number(current / total) * 100 ;
  }

}
