import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import{ActivatedRoute} from '@angular/router';
import{Employee} from '../model/employee';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  msg:string
  employees: Employee[];

  constructor(private employeeService:EmployeeService,
    private activatedRoute:ActivatedRoute) {}

  ngOnInit() {

    this.employeeService.getAllEmployees().subscribe(
      (data) => this.employees = data//stored in array contacts
    );
    this.activatedRoute.queryParams.subscribe(
      (params)=>{//params recieved while delelting/ updating /adding.
        let empId=params['id'];
        if(empId){
          this.msg = "Contact # "+empId + " is successfully "
          
        }else{
          this.msg=undefined;
        }
      }
    );
   
    }
  

  }
