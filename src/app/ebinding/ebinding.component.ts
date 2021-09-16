import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ebinding',
  templateUrl: './ebinding.component.html',
  styleUrls: ['./ebinding.component.css']
})
export class EbindingComponent {
  serverid:number=10;
  serverStatus:string="interpolated done with string and method";
  allownewserver:boolean= false;
  servercreationstatus:string='';
eb:any;

  x()
  {
     return this.serverStatus;
  }

  send(message: any){
console.log(message);
this.eb=message;
  }

constructor(){
setTimeout(() => {
this.allownewserver=true;
    }, 3000);
}
// event binding using method

onCreateServer()
  {
    this.servercreationstatus="welcome";
console.log("event binding is done")
}
}

