import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

let baseUrl = 'http://localhost:8080/goals';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  // should be removed once refactored - use getAll()
  getAll2(): Observable<any> {
    return this.http.get(baseUrl);
  }
  
  // should be removed once refactored - use get(id)
  get2(orderId): Observable<any> {
    return this.http.get(`${baseUrl}/${orderId}`);
  }
  
  create(data): Observable<any> {
    return this.http.post(`${baseUrl}/add`, data);
  }
  
  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }
  
  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}



