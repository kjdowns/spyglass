import { Component, OnInit } from '@angular/core';
import { GoalService } from 'src/app/service/goal.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  showPlan = false;
  today = Date.now();
  output = null;
  milliInMonth: number = 2629800000

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
  
  constructor(private goalService: GoalService) { }

  ngOnInit(): void {
  }
//calculate the monthly payment given a target amount and date
  calculatePlan(): void {
    console.log("Calculating Plan!")
    this.showPlan = !this.showPlan;
    let timespan = (Number(this.targetDate) - Number(this.today));
    this.monthlyPayment = this.amount / (timespan / this.milliInMonth);
    console.log(this.monthlyPayment);
  }
//clear values and button upon reset 
  reset() {
    this.targetDate = null;
    this.amount = 0;
    this.showPlan = !this.showPlan;
  }

}
