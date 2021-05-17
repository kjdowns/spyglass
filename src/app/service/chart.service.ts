import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Goal } from '../models/goal';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
private baseUrl = 'http://localhost:8080/goals'
  constructor(private httpClient: HttpClient) { }

  getGoals(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/goals");
  }
  
}

