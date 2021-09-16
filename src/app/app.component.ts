import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 /* styles:[
          `div {
            height: 500px;
            width: 500px;
            color: white;
            position: relative;
            animation: mymove 6s infinite;
            background:blue
               },
  @keyframes mymove
  {
    from {left: 0px;}
       to {right: 100px;}
  }`

  ]*/
})
export class AppComponent  {

  title = 'ser';
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
  onCreateServer(){
this.servercreationstatus="server was created";
  }









}
