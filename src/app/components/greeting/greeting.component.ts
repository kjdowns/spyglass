import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  showPlan = false;
  amount: 0.00;
  targetDate: Date;
  today = Date.now();
  output = null;
  milliInMonth: number = 2629800000
  monthlyPayment: number;
  
  constructor() { }

  ngOnInit(): void {
  }

  calculatePlan(): void {
    console.log("Calculating Plan!")
    this.showPlan = !this.showPlan;
    let timespan = (Number(this.targetDate) - Number(this.today));
    this.monthlyPayment = this.amount / (timespan / this.milliInMonth);
    console.log(this.monthlyPayment);
  }

}
