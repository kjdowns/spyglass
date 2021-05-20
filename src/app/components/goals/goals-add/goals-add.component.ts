import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GoalService } from 'src/app/service/goal.service';
import { ImageService } from 'src/app/service/image.service';

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

  pictures: Picture[];
  
  goals = {
    name: '',
    description: '',
    picture: null,
    targetDate: null,
    currentAmount: null,
    targetAmount: null
  };

  //getters and setters for service properties 
  get targetDate(): Date{
    return this.goalService.targetDate;
    
  }
  set targetDate(value: Date){
    this.goalService.targetDate = value;
  }
  get monthlyPayment(): number{
    return this.goalService.monthlyPayment;
  }
  set monthlyPayment(value: number){
    this.goalService.monthlyPayment = value;
  }
  get amount(): number{
    return this.goalService.amount;
  }
  set amount(value: number){
    this.goalService.amount = value;
  }
  
  submitted = false;

  constructor(
    private goalService: GoalService,
    private imageService: ImageService) { }

  ngOnInit(): void {
    if (this.goalService.amount){
      this.newGoal();
      this.goalService.amount= null;
      this.goalService.monthlyPayment = null;
      this.goalService.targetDate = null;
    }
    this.pictures = this.imageService.getAll();
    console.log(this.pictures);
  }

  saveGoal(): void {
    const data = {
      name: this.goals.name,
      description: this.goals.description,
      picture: this.goals.picture,
      targetDate: this.goals.targetDate,
      currentAmount: Number(this.goals.currentAmount),
      targetAmount: Number(this.goals.targetAmount)
    };
    console.log(data);
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
      targetDate: this.targetDate,
      currentAmount: this.monthlyPayment,
      targetAmount : this.amount
    }
  }

  
}