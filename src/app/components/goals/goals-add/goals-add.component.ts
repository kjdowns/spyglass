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

  name = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  targetDate = new FormControl('', [Validators.required]);
  currentAmount = new FormControl('', [Validators.required]);
  targetAmount = new FormControl('', [Validators.required]);

  // //getters and setters for service properties 
  // get targetDate(): Date{
  //   return this.goalService.targetDate;
  // }
  // set targetDate(value: Date){
  //   this.goalService.targetDate = value;
  // }
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
      currentAmount: this.monthlyPayment,
      targetAmount : this.amount
    }
  }

  getErrorName() {
    if (this.name.hasError('required')) {
      return 'Name missing';
    }
    return this.name.hasError('name') ? 'Not a valid name' : '';
  }

  getErrorDescription() {
    if (this.description.hasError('required')) {
      return 'Description missing';
    }
    return this.description.hasError('description') ? 'Not a valid description' : '';
  }

  getErrorTargetDate() {
    if (this.targetDate.hasError('required')) {
      return 'Target Date missing';
    }
    return this.targetDate.hasError('targetDate') ? 'Not a valid targetDate' : '';
  }

  getErrorCurrentAmount() {
    if (this.currentAmount.hasError('required')) {
      return 'Current Amount missing';
    }
    return this.currentAmount.hasError('currentAmount') ? 'Not a valid currentAmount' : '';
  }

  getErrorTargetAmount() {
    if (this.targetAmount.hasError('required')) {
      return 'Target Amount missing';
    }
    return this.targetAmount.hasError('targetAmount') ? 'Not a valid targetAmount' : '';
  }
}