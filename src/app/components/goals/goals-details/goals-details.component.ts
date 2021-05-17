import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Goal } from 'src/app/models/goal';
import { GoalService } from 'src/app/service/goal.service';

@Component({
  selector: 'app-goals-details',
  templateUrl: './goals-details.component.html',
  styleUrls: ['./goals-details.component.css']
})
export class GoalsDetailsComponent implements OnInit {

  goal: Goal;

  constructor(private goalService: GoalService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getGoal(this.route.snapshot.paramMap.get('id'));
  }

  getGoal(id){
    this.goalService.get(id)
      .subscribe(data => {
        this.goal = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  displayProgress(current, total){
    return Number(current / total) * 100 ;
  }

}
