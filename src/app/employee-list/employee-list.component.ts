import { Component, OnInit } from '@angular/core';
import { EsService } from '../es.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public errormsg:any;
  public emp:any=[];
  constructor(private _es: EsService){}

  ngOnInit(){
this._es.getEmployees ().subscribe((data: any)=>this.emp=data,
                                     (error:any)=>this.errormsg=error);

  }

}
