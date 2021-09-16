import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import {Observable,throwError} from 'rxjs';
import{catchError} from 'rxjs/operators';
import { StdComponent } from './std/std.component';
import { PbindingComponent } from './pbinding/pbinding.component';
import { EbindingComponent } from './ebinding/ebinding.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    StdComponent,
    PbindingComponent,
    EbindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
