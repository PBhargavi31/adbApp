import { Component } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string;
  logoUrl:string;
  field:string="dept";//by what we want to search
  srchValue:string="";

  constructor(  private router:Router
  ){
    this.title="Empoyee Portal";
    this.logoUrl="/assets/emplogo.jpg";
    
  }
  doSearch(){
    this.router.navigate(["/list"],{queryParams:{field:this.field,srchValue:this.srchValue}});
  }

  doChangeField(field,ele){
    //when button is clicked we recieve field and elemnt
    this.field=field;//default field val overwritten
    this.srchValue="";//to clear field for entering new value
    switch(field){
      case 'lastName': ele.placeholder="lastName";ele.type="text"; break;
      case 'dept': ele.placeholder="Department";ele.type="text"; break;
     
    }
}
}