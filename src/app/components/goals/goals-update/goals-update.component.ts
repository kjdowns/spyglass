import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  
  pictures: Picture[]= [
    {value:"House", image: "../assets/images/house.png"},
    {value:"Car", image: "../assets/images/car.png"},
    {value:"Wedding", image: "../assets/images/wedding.png"}
  ];

  currentGoal= {
      name: "New Car",
      description: "Saving for a brand new car",
      picture: null,
      targetDate: new Date('2022-01-01'),
      currentAmount: 1000.00,
      targetAmount: 23000.00
  };
  message = "";

  name = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  targetDate = new FormControl('', [Validators.required]);
  currentAmount = new FormControl('', [Validators.required]);
  targetAmount = new FormControl('', [Validators.required]);

  constructor(
    private goalService: GoalService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = '';
    this.getGoal(this.route.snapshot.paramMap.get('id'));
  }

  getGoal(id): void {
    // this.currentGoal = this.goalService.get(1);
    // this.goalService.get2(1)
    //   .subscribe(
    //     data => {
    //       this.currentGoal = data;
    //       console.log(data);
    //     },
    //     error => {
    //       console.log(error);
    //     });
  }

  // updateGoal(): void {
  //   this.goalService.update(this.currentGoal.id, this.currentGoal)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.message = 'The GOAL was updated successfully!';
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

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
