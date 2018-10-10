import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl: string;

  constructor(private http:Http) { 
    this.baseUrl = "http://localhost:6009/employees";

  }
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data.json())
    );
  }
  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get(this.getBaseUrlById(id)).pipe(
      map(data => data.json())
    );
  }
  getBaseUrlById(id: number): string {
    return this.baseUrl + "/" + id;
  }

  getSearchUrl(field: string, value: string): string {
    return this.baseUrl + "/" + field + "/" + value;
  }
  searchEmployees(field: string, value: string): Observable<Employee[]> {
    return this.http.get(this.getSearchUrl(field,value)).pipe(
      map(data => data.json())
    );
    
  }
  getJsonContentTypeHeader(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }
  deleteContactById(id: number): Observable<Response> {
    return this.http.delete(this.getBaseUrlById(id));
  }

  addContact(contact: Employee): Observable<Employee> {
    return this.http.post(this.baseUrl, JSON.stringify(contact), this.getJsonContentTypeHeader()).pipe(
      map(data => data.json())
    );
  }

  updateContact(contact: Employee): Observable<Employee> {
    return this.http.put(this.baseUrl, JSON.stringify(contact), this.getJsonContentTypeHeader()).pipe(
      map(data => data.json())
    );
  }

}
