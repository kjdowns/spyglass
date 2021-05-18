import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/models/goal';
import { ChartService } from 'src/app/service/chart.service';




@Component({
  selector: 'app-charts-progress',
  templateUrl: './charts-progress.component.html',
  styleUrls: ['./charts-progress.component.css']
})
export class ChartsProgressComponent implements OnInit {

  goals: Goal [];
  private subscription; 
  goalsChartArray = [{
    "name": "TV",
    "value": 1000
   },{
    "name": "Vacation",
    "value": 5000
   },{
    "name": "Event",
    "value": 83
   }]
  
      
  goalsChart =
   {
    "name": "TV",
    "value": 1000
   };

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.subscription = this.chartService.getGoals().subscribe((data: any[])=> {
      this.goals = data;
       this.getChartData();
    })
  }
  
getChartData(){
  this.goals.forEach((goal)=> {
    for ( let i = 0; i < this.goalsChartArray.length; i++){
      this.goalsChart[i].name = goal.name;
     this.goalsChart[i].value = goal.currentAmount;
    }
     
    console.log(this.goalsChart);
    
  })
  }


}

