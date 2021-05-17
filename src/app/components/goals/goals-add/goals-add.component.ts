import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GoalService } from 'src/app/service/goal.service';

interface Picture {
  value: string;
  image?: string; 
}

@Component({
  selector: 'app-goals-add',
  templateUrl: './goals-add.component.html',
  styleUrls: ['./goals-add.component.css']
})

export class GoalsAddComponent implements OnInit {

  pictures: Picture[]= [
    {value:"House", image: "../assets/images/house.png"},
    {value:"Car", image: "../assets/images/car.png"},
    {value:"Wedding", image: "../assets/images/wedding.png"}
  ];

  goals = {
    name: '',
    description: '',
    picture: null,
    targetDate: '',
    currentAmount: null,
    targetAmount: null
  };

  submitted = false;

  constructor(
    private goalService: GoalService) { }

  ngOnInit(): void {
    if (this.goalService.amount){
      this.newGoal();
      this.goalService.amount= null;
    }
    
   
  }

  saveGoal(): void {
    const data = {
      name: this.goals.name,
      description: this.goals.description,
      picture: this.goals.picture,
      targetDate: this.goals.targetDate,
      currentAmount: this.goals.currentAmount,
      targetAmount: this.goals.targetAmount
    };

    this.goalService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newGoal(): void {
    this.submitted = false;
    this.goals = {
      name: '',
      description: '',
      picture: null,
      targetDate: '',
      currentAmount: null,
      targetAmount : null
    }
  }

  
}