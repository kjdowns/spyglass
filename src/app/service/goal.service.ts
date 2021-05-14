import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal } from '../models/goal';

let baseUrl = '';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  GOALS: Goal[] = [
    {
      id: 1,
      name: "New Car",
      description: "Saving for a brand new car",
      picture: null,
      targetDate: new Date('2022-01-01'),
      currentAmount: 1000.00,
      targetAmount: 23000.00
    },
    {
      id: 2,
      name: "PlayStation 5",
      description: "Saving for a PlayStation 5",
      picture: null,
      targetDate: new Date('2021-10-01'),
      currentAmount: 500.00,
      targetAmount: 600.00
    }
  ];

  constructor(private http: HttpClient) { }

  getAll(): Goal[] {
    return this.GOALS;
  }

  get(id): Goal {
    let selectGoal = this.GOALS.find(goal => id == goal.id);
    return selectGoal;
  }

  getAll2(): Observable<any> {
    return this.http.get(baseUrl);
  }
  
  get2(orderId): Observable<any> {
    return this.http.get(`${baseUrl}/${orderId}`);
  }
  
  create(data): Observable<any> {
    let baseUrl = 'http://localhost:8081/goals/add';
    return this.http.post(baseUrl, data);
  }
  
  update(id, data): Observable<any> {
    let baseUrl = 'http://localhost:8081/goals/update';
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  
  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}



