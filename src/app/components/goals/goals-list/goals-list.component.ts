import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.css']
})
export class GoalsListComponent implements OnInit {

  GOALS = [
    {
      id: 1,
      name: "New Car",
      description: "Saving for a brand new car",
      picture: null,
      targetDate: '2022-01-01',
      currentAmount: 1000.00,
      targetAmount: 23000.00
    },
    {
      id: 2,
      name: "PlayStation 5",
      description: "Saving for a PlayStation 5",
      picture: null,
      targetDate: '2021-10-01',
      currentAmount: 500.00,
      targetAmount: 600.00
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  private displayProgress(current, total){
    return Number(current / total) * 100 ;
  }

}
