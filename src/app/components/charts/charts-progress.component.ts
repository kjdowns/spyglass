import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/models/goal';
import { ChartService } from 'src/app/service/chart.service';


interface Picture {
  value: string;
  image?: string; 
}

@Component({
  selector: 'app-charts-progress',
  templateUrl: './charts-progress.component.html',
  styleUrls: ['./charts-progress.component.css']
})
export class ChartsProgressComponent implements OnInit {

  goals: Goal [] = [];
  private subscription; 
  goalsChartArray = [];
  goalsChart = 
    {
      "name": "",
      "value": 0
    }

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.subscription = this.chartService.getGoals().subscribe((data: any[])=> {
      this.goals = data;
      this.getChartData();
    })
  }
getChartData(){
  this.goals.forEach((goal)=> {
    this.goalsChart.name = goal.name;
    this.goalsChart.value = goal.currentAmount;
    this.goalsChartArray.push(this.goalsChart)
  })
  }


}

