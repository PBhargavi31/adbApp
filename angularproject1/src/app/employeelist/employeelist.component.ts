import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../service/employee.service';
import { Employee } from '../model/employee';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employees:Employee[];

  constructor(  private employeeService:EmployeeService,
    private activatedRoute : ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    // this.employeeService.getAllEmployees().subscribe(
    //   (data) => this.employees=data
    // );
    this.activatedRoute.queryParams.subscribe(
      (params) =>{
        let field = params['field'];
        let srchValue = params['srchValue'];

        console.log(field +":"+srchValue);

        if(field && srchValue){
          this.employeeService.searchEmployees(field,srchValue).subscribe(
            (data) => this.employees=data,
            (err)=> this.employees=undefined
          );
        }else{
          this.employeeService.getAllEmployees().subscribe(
            (data) => this.employees=data,
            (err)=> this.employees=undefined

          );
        }
      },
      (err)=> this.employees=undefined

    );
    
  }


}
