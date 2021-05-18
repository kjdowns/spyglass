import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Goal } from 'src/app/models/goal';
import { GoalService } from 'src/app/service/goal.service';

interface Picture {
  value: string;
  image?: string; 
}

@Component({
  selector: 'app-goals-update',
  templateUrl: './goals-update.component.html',
  styleUrls: ['./goals-update.component.css']
})
export class GoalsUpdateComponent implements OnInit {
  
  pictures: Picture[] = [
    {value: "Romance", image: "./assets/images/anniversary.png"},
    {value: "Appliance", image: "./assets/images/appliance.png"},
    {value: "Car", image: "./assets/images/car.png"},
    {value: "Electronics", image: "./assets/images/electronics.png"},
    {value: "Entertainment", image: "./assets/images/entertainment.png"},
    {value: "Event", image: "./assets/images/event.png"},
    {value: "Generic", image: "./assets/images/generic.png"},
    {value: "Gift", image: "./assets/images/gift.png"},
    {value: "House", image: "./assets/images/house.png"},
    {value: "Travel", image: "./assets/images/travel.png"}
  ];

  currentGoal: Goal;
  message = "";

   constructor(
    private goalService: GoalService,
    private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.message = '';
    this.getGoal(this.route.snapshot.paramMap.get('id'));
  }

  getGoal(id): void {
    this.goalService.get(id)
      .subscribe(
        data => {
          this.currentGoal = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateGoal(): void {
    this.goalService.update(this.currentGoal.id, this.currentGoal)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The GOAL was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  fixToNumber(num) {
    num = parseFloat(num.replace(/,/g, ''));
    console.log(num);
    if (isNaN(num)){
      return 0;
    }
    else{
      return Number(num);
    }
  }
}
