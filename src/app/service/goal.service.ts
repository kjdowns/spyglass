import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

let baseUrl = 'http://localhost:8080/goals';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  targetDate: Date;
  monthlyPayment: number;
  amount: number;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  
  create(data): Observable<any> {
    return this.http.post(`${baseUrl}/add`, data);
  }
  
  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }
  
  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

}



