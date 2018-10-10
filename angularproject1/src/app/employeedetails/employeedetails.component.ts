import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../model/employee';


@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  employee: Employee;

  constructor(private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        let empId = params['id'];
        if (empId) {
          this.employeeService.getEmployeeById(empId).subscribe(
            (data) => this.employee = data
          );
        }
      }
    );
  }


}
