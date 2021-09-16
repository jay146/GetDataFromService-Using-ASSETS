import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-std',
  templateUrl: './std.component.html',
  styleUrls: ['./std.component.css']
})
export class StdComponent  {
 stdname:string;
  constructor(@Inject(String) private name: string) {
    this.stdname=name;
  }
 greet(){
    console.log(`${this.stdname}`);

  }

}
