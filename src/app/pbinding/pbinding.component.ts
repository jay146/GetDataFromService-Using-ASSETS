import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pbinding',
  templateUrl: './pbinding.component.html',
  styleUrls: ['./pbinding.component.css']
})
export class PbindingComponent  {

  serverid:number=10;
  serverStatus:string="interpolated done with string and method";
  allownewserver:boolean= false;
  servercreationstatus:string='';


  x()
  {
     return this.serverStatus;
  }

constructor(){
setTimeout(() => {
this.allownewserver=true;
    }, 3000);
  }
  onCreateServer()
  {
this.servercreationstatus="server was created";
  }









}


