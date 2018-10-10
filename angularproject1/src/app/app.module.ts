import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { EmployeelistComponent } from './employeelist/employeelist.component';
import { DeptCountPipe } from './pipes/dept-count.pipe';
import { HttpModule } from '@angular/http';
 import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpformComponent } from './empform/empform.component';

const paths : Routes =[
  {path:'',component:DashboardComponent},
  {path:'list',component:EmployeelistComponent},
   {path:'details',component:EmployeedetailsComponent }

]; 
@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    DeptCountPipe,
 EmployeedetailsComponent,
 DashboardComponent,
 EmpformComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(paths),
    HttpModule  ,
    FormsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
